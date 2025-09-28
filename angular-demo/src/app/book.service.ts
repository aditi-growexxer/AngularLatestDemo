import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  apiUrl = 'http://localhost/AngularDemo25/angular-api/api/';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<any> {
    return this.http.get(this.apiUrl + 'get_books.php');
  }

  addBook(book): Observable<any> {
    return this.http.post(this.apiUrl + 'add_book.php', book);
  }

  updateBook(book): Observable<any> {
    return this.http.put(this.apiUrl + 'update_book.php', book);
  }

  deleteBook(id): Observable<any> {
    return this.http.request('delete', this.apiUrl + 'delete_book.php', { body: { id } });
  }
}
