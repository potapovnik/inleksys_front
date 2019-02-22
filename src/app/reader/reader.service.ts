import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Reader} from './reader';
import {Book} from '../books/book';

@Injectable({
  providedIn: 'root'
})
export class ReaderService {
  private getAllUserURL = '/api/reader/all';
  private getCurrentUserURL = '/api/reader/curUser';
  private CreateNewUserURL = '/api/reader/';
  private deleteReaderURL = '/api/reader';
  private updateReaderURL = '/api/reader';
  constructor(private http: HttpClient) {
  }

  getAllUsers(): Observable<Reader[]> {
    console.log('GET_ALL', this.getAllUserURL);
    return this.http.get<Reader[]>((this.getAllUserURL));
  }
  getCurrentUser(): Observable<Reader> {
    console.log('GET_ALL', this.getCurrentUserURL);
    return this.http.get<Reader>((this.getCurrentUserURL));
  }
  creteNewUser (reader: Reader): Observable<Reader> {
    console.log('Create_new_user', this.CreateNewUserURL);
    return this.http.post<Reader>(this.CreateNewUserURL, reader);
  }

  deleteReader(id: number): Observable<Reader> {
    const url = `${this.deleteReaderURL}?id=${id}`;
    console.log('delete', url);
    return this.http.delete<Reader>(url);
  }
  updateReader(reader: Reader): Observable<Reader> {
    console.log('pur', this.updateReaderURL);
    return this.http.put<Reader>(this.updateReaderURL, reader);
  }
}
