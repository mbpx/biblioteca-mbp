import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/core/models/libro.model';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { ContextService } from 'src/app/core/services/context/context.service';
import { LibrosService } from 'src/app/core/services/libros/libros.service';

@Component({
  selector: 'app-libro',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.scss']
})
export class BibliotecaComponent implements OnInit {

  libros: Libro[];

  constructor(
    private auth: AuthService,
    private contextService: ContextService,
    private libroService: LibrosService,
  ) { }

  ngOnInit(): void {

      this.auth.user$.subscribe(user => {
        if (user) {
          this.libroService.getLibros(this.contextService.getBiblioteca().id).subscribe((data: any[]) => {
            this.libros = data;
          });
        }
      });
  }

  openLibro(libro: Libro) {
    return;
  }

}
