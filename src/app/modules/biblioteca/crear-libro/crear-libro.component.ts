import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotifierService } from 'angular-notifier';
import { GoogleBook } from 'src/app/core/models/google-books.model';
import { Libro } from 'src/app/core/models/libro.model';
import { ContextService } from 'src/app/core/services/context/context.service';
import { GoogleBooksService } from 'src/app/core/services/google-books/google-books.service';
import { LibrosService } from 'src/app/core/services/libros/libros.service';



@Component({
  selector: 'app-crear-libro',
  templateUrl: './crear-libro.component.html',
  styleUrls: ['./crear-libro.component.scss']
})
export class CrearLibroComponent implements OnInit {

  formCrearLibro: FormGroup;
  googleBook: GoogleBook;

  @ViewChild('matchingBooksDialog')
  private matchingBooksDialog: TemplateRef<any>;
  matchingBooksDialogContent: GoogleBook[];

  constructor(
    private formBuilder: FormBuilder,
    private contextService: ContextService,
    private libroService: LibrosService,
    private notifierService: NotifierService,
    private router: Router,
    private googleBooksService: GoogleBooksService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.formCrearLibro = this.formBuilder.group({
      signatura: new FormControl(''),
      titulo: new FormControl(''),
      autor: new FormControl(''),
      editorial: new FormControl(''),
      coleccion: new FormControl(''),
      isbn: new FormControl(''),
      year: new FormControl(''),
      public: new FormControl(false)
    });
  }

  crearLibro() {
    let libro: Libro = this.formCrearLibro.value as Libro;
    this.libroService.createLibro(this.contextService.getBiblioteca().id, libro).then(() => {
      this.router.navigate(['/biblioteca/' + this.contextService.getBiblioteca().id]);
      this.notifierService.notify('success', 'Libro creado correctamente');
    });
  }

  buscarGoogleBooks() {
    let titulo = this.formCrearLibro.get('titulo').value;
    let autor = this.formCrearLibro.get('autor').value;

    let matchingBooks: GoogleBook[] = [];
    this.googleBooksService.searchBooksByTitleAndAuthor(titulo, autor).subscribe((data: any) => {
      const max_attemts = data.items.length;
      for (let i = 0; i < max_attemts; i++) {
        let item = data.items[i];
        if (item.volumeInfo.title == titulo && item.volumeInfo.authors[0] == autor) {
          matchingBooks.push(item);
        }
      }
      if (matchingBooks.length > 0) {
        this.matchingBooksDialogContent = matchingBooks;
        this.openMatchingBooks(this.matchingBooksDialog);
      }
    });
  }

  openMatchingBooks(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log(reason);
    });
  }

}
