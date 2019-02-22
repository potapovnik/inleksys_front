import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Reader} from '../reader';
import {ReaderService} from '../reader.service';
export interface DialogData {
  reader: Reader;
  id: number;
  flag: boolean;
}

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.scss']
})
export class CreateDialogComponent implements OnInit {
  reader: Reader = new Reader();
  error: String;
  constructor(private readersercice: ReaderService,
              public dialogRef: MatDialogRef<CreateDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    if (this.data.flag !== true) {
      this.readersercice.creteNewUser(this.reader).subscribe(reader =>
        this.dialogRef.close(), error1 => {
        this.error = 'User with this login exist';
      });
    } else {
      this.reader.id = this.data.reader.id;
      this.readersercice.updateReader(this.reader).subscribe(res => this.dialogRef.close());
    }
  }
  ngOnInit() {
    this.reader.login = this.data.reader.login;
  }

}
