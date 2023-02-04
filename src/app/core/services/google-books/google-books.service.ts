import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleBooksSearchResponse, GoogleBook } from '../../models/google-books.model';

@Injectable({
  providedIn: 'root'
})
export class GoogleBooksService {

  constructor(
    private http: HttpClient
  ) { }

  searchBooks(query: string): Observable<GoogleBooksSearchResponse> {
    return this.http.get<GoogleBooksSearchResponse>('https://www.googleapis.com/books/v1/volumes?q=' + query);
  }

  getBook(id: string): Observable<GoogleBook> {
    return this.http.get<GoogleBook>('https://www.googleapis.com/books/v1/volumes/' + id);
  }

  searchBooksByTitleAndAuthor(title: string, author: string): Observable<GoogleBooksSearchResponse> {
    return this.http.get<GoogleBooksSearchResponse>('https://www.googleapis.com/books/v1/volumes?q=' + title + '+inauthor:' + author);
  }
}
