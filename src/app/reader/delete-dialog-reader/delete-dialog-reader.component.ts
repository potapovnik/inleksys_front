import {Component, Inject, OnInit} from '@angular/core';
import {BookService} from '../../books/book.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogData} from '../../books/books.component';
import {ReaderService} from '../reader.service';

@Component({
  selector: 'app-delete-dialog-reader',
  templateUrl: './delete-dialog-reader.component.html',
  styleUrls: ['./delete-dialog-reader.component.scss']
})
export class DeleteDialogReaderComponent implements OnInit {

  constructor( private readerservice: ReaderService,
               public dialogRef: MatDialogRef<DeleteDialogReaderComponent>,
               @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.readerservice.deleteReader(this.data.id).subscribe();
    this.readerservice.getAllUsers().subscribe(result => this.dialogRef.close());
  }
  ngOnInit() {

  }
}
