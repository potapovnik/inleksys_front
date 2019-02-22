import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from './book';
import {Reader} from '../reader/reader';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  private getAllBooksURL = '/api/book/all';
  private getAllBooksWithNameURL = '/api/book/allwithname';
  private getBookURL = '/api/book/';
  private deleteBookURL = '/api/book';
  private createBookURL = '/api/book/';
  private updateBookURL = '/api/book/';
  private getCurrentUserURL = '/api/reader/curUser';

  constructor(private http: HttpClient) {
  }

  getAllBooks(): Observable<Book[]> {
    console.log('GET_ALL', this.getAllBooksURL);
    return this.http.get<Book[]>((this.getAllBooksURL));
  }

  getAllBooksWithName(): Observable<Book[]> {
    console.log('GET_ALL', this.getAllBooksWithNameURL);
    return this.http.get<Book[]>((this.getAllBooksWithNameURL));
  }

  getBook(id: number): Observable<Book> {
    const url = `${this.getBookURL}?id=${id}`;
    console.log('GET', url);
    return this.http.get<Book>(url);
  }

  deleteBook(id: number): Observable<Book> {
    const url = `${this.deleteBookURL}?id=${id}`;
    console.log('delete', url);
    return this.http.delete<Book>(url);
  }

  createBook(book: Book): Observable<Book> {
    console.log('create', this.createBookURL);
    return this.http.post<Book>(this.createBookURL, book);
  }

  getCurrentUser(): Observable<Reader> {
    console.log('GET_ALL', this.getCurrentUserURL);
    return this.http.get<Reader>((this.getCurrentUserURL));
  }
  updateBook(book: Book): Observable<Book> {
    console.log('pur', this.updateBookURL);
    return this.http.put<Book>(this.updateBookURL, book);
  }
}
