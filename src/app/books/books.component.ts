import { Component, OnInit } from '@angular/core';
import {MatDialog, Sort} from '@angular/material';
import {DeleteDialogComponent} from './delete-dialog/delete-dialog.component';
import {BookService} from './book.service';
import {Book} from './book';
import {Reader} from '../reader/reader';
import {CreateDialogBookComponent} from './create-dialog-book/create-dialog-book.component';
export interface DialogData {
  book: Book;
  id: number;
  flag: boolean;
}
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books: Book[];
  sortedBook: Book[];
  currentUser: Reader;
  showMoreCount = 5;

  constructor(public dialog: MatDialog, private bookservice: BookService) {
  }
  ngOnInit() {
    this.bookservice.getAllBooksWithName().subscribe(books => {
      this.books = books;
    });
    this.getCurrentUser();
  }

  openDialogForDeleteBook(id: number): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: {id: id}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  openDialogForCreateBook(): void {
    const dialogRef = this.dialog.open(CreateDialogBookComponent, {
      width: '250px',
      data: {flag: false}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  openDialogForUpdateBook(book: Book): void {
    const dialogRef = this.dialog.open(CreateDialogBookComponent, {
      width: '250px',
      data: {book: book, flag: true}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  takeBook(book: Book) {
    book.reader_id = this.currentUser.id;
    book.login = this.currentUser.login;
    this.bookservice.updateBook(book).subscribe(res => this.bookservice.getAllBooksWithName().subscribe());
  }
  returnBook(book: Book) {
    book.reader_id = null;
    book.login = null;
    this.bookservice.updateBook(book).subscribe(res => this.bookservice.getAllBooksWithName().subscribe());
  }
  getCurrentUser() {
    this.bookservice.getCurrentUser().subscribe(currentUs => {
      this.currentUser = currentUs;
    });
  }

  showMore() {
    this.showMoreCount += 5;
  }
  sortData(sort: Sort) {
    this.sortedBook = this.books.slice();
    const data = this.books.slice(0, this.showMoreCount);
    if (!sort.active || sort.direction === '') {
      this.sortedBook = data;
      return;
    }
    this.sortedBook = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id':
          return compare(a.id, b.id, isAsc);
        case 'author':
          return compare(a.author, b.author, isAsc);
        case 'tittle':
          return compare(a.title, b.title, isAsc);
        default:
          return 0;
      }
    });
  }
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
