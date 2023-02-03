import { Injectable } from '@angular/core';
import { User } from 'firebase/auth';
import { Biblioteca } from '../../models/biblioteca.model';

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  constructor(
  ) { }

  setUSer(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(): User {
    return JSON.parse(localStorage.getItem('user'));
  }

  removeUser(): void {
    localStorage.removeItem('user');
  }

  setBiblioteca(biblioteca: Biblioteca): void {
    localStorage.setItem('biblioteca', JSON.stringify(biblioteca));
  }

  getBiblioteca(): Biblioteca {
    return JSON.parse(localStorage.getItem('biblioteca'));
  }
}
