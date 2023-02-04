import { Component, Input, OnInit } from '@angular/core';
import { GoogleBook } from 'src/app/core/models/google-books.model';
import { Libro } from 'src/app/core/models/libro.model';

@Component({
  selector: 'app-miniatura-libro',
  templateUrl: './miniatura-libro.component.html',
  styleUrls: ['./miniatura-libro.component.scss']
})
export class MiniaturaLibroComponent implements OnInit {

  @Input('book')
  libro: Libro;

  @Input('googleBook')
  googleBook: GoogleBook

  constructor() { }

  ngOnInit(): void {
    if (this.googleBook) {
      this.libro = new Libro();
      this.libro.titulo = this.googleBook.volumeInfo.title;
      this.libro.autor = this.googleBook.volumeInfo.authors[0];
      this.libro.editorial = this.googleBook.volumeInfo.publisher;
      this.libro.year = this.googleBook.volumeInfo.publishedDate;
      this.libro.isbn = this.googleBook.volumeInfo.industryIdentifiers[0].identifier;
      // this.libro.coleccion = this.googleBook.volumeInfo.categories[0];
      this.libro.imagen = this.googleBook.volumeInfo.imageLinks.thumbnail;
      console.log(this.libro);
    }
  }

}
