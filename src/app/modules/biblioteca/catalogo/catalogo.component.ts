import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Biblioteca } from 'src/app/core/models/biblioteca.model';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { BibliotecaService } from 'src/app/core/services/biblioteca/biblioteca.service';
import { ContextService } from 'src/app/core/services/context/context.service';
import { LibrosService } from 'src/app/core/services/libros/libros.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {

  bibliotecas: Biblioteca[];

  constructor(
    private auth: AuthService,
    private bibliotecaService: BibliotecaService,
    private contextService: ContextService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.auth.user$.subscribe(user => {
      if (user) {
        this.bibliotecaService.getBibliotecas(user.uid).subscribe((data: any[]) => {
          this.bibliotecas = data;
        });
      }
    });
  }

  openBiblioteca(biblioteca: Biblioteca) {
    this.contextService.setBiblioteca(biblioteca);
    this.router.navigate(['/biblioteca/' + biblioteca.id]);
  }

}
