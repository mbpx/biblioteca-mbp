import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Libro } from '../../models/libro.model';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor(
    private db: AngularFirestore
  ) { }

  getLibros(bibliotecaKey: string) {
    return this.db.collection('bibliotecas').doc(bibliotecaKey).collection('libros').valueChanges();
  }

  getLibro(bibliotecaKey: string, libroKey: string) {
    return this.db.collection('bibliotecas').doc(bibliotecaKey).collection('libros').doc(libroKey).valueChanges();
  }

  createLibro(bibliotecaKey: string, value: Libro) {
    return this.db.collection('bibliotecas').doc(bibliotecaKey).collection('libros').add(value);
  }

  updateLibro(bibliotecaKey: string, libroKey: string, value: Libro) {
    return this.db.collection('bibliotecas').doc(bibliotecaKey).collection('libros').doc(libroKey).set(value);
  }

  deleteLibro(bibliotecaKey: string, libroKey: string) {
    return this.db.collection('bibliotecas').doc(bibliotecaKey).collection('libros').doc(libroKey).delete();
  }
}
