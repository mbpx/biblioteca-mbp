import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Biblioteca } from '../../models/biblioteca.model';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {

  constructor(
    public db: AngularFirestore
  ) { }

  getBibliotecas(userKey: string) {
    return this.db.collection('bibliotecas', ref => ref.where('propietario', '==', userKey)).valueChanges();
  }

  getBiblioteca(bibliotecaKey: string) {
    return this.db.collection('bibliotecas').doc(bibliotecaKey).valueChanges();
  }

  createBiblioteca(value: Biblioteca) {
    return this.db.collection('bibliotecas').add(value);
  }

  updateBiblioteca(bibliotecaKey: string, value: Biblioteca) {
    return this.db.collection('bibliotecas').doc(bibliotecaKey).set(value);
  }

  deleteBiblioteca(bibliotecaKey: string) {
    return this.db.collection('bibliotecas').doc(bibliotecaKey).delete();
  }
}
