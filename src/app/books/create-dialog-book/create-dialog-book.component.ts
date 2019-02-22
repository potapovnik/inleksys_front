import {Component, Inject, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogData} from '../books.component';
import {Book} from '../book';
export interface DialogData {
  book: Book;
  id: number;
}
@Component({
  selector: 'app-create-dialog-book',
  templateUrl: './create-dialog-book.component.html',
  styleUrls: ['./create-dialog-book.component.scss']
})
export class CreateDialogBookComponent implements OnInit {
  book: Book = new Book();
  error: String;
  constructor( private bookservice: BookService,
               public dialogRef: MatDialogRef<CreateDialogBookComponent>,
               @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {

    if (this.data.flag !== true) {
      this.book.reader_id = null;
      this.bookservice.createBook(this.book).subscribe(reader =>
        this.dialogRef.close(), error1 => {
        this.error = 'Book with this ISBN exist';
      });
    } else {
      this.book.reader_id = this.data.book.reader_id;
      this.book.id = this.data.book.id;
      this.bookservice.updateBook(this.book).subscribe(reader => this.dialogRef.close());
    }
  }
  ngOnInit() {

  }

}
