import {Component, OnInit} from '@angular/core';
import {Reader} from './reader';
import {MatDialog, Sort} from '@angular/material';
import {ReaderService} from './reader.service';
import {DeleteDialogComponent} from '../books/delete-dialog/delete-dialog.component';
import {CreateDialogComponent} from './create-dialog/create-dialog.component';
import {DeleteDialogReaderComponent} from './delete-dialog-reader/delete-dialog-reader.component';

export interface DialogData {
  reader: Reader;
  id: number;
  flag: boolean;
}

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.scss']
})
export class ReaderComponent implements OnInit {
  users: Reader[];
  sortedUser: Reader[];
  currentUser: Reader;
  flag: boolean;
  nullreader: Reader = new Reader();

  constructor(private userservice: ReaderService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.userservice.getAllUsers().subscribe(users => {
      this.users = users;
      this.sortData(<Sort>({active: 'id', direction: 'asc'}));
    });
    this.getCurrentUser();
  }

  openDialogCreate(): void {
    this.flag = false;
    const dialogRef = this.dialog.open(CreateDialogComponent, {
      width: '250px',
      data: {reader: this.nullreader, flag: this.flag}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.userservice.getAllUsers().subscribe(users => {
        this.sortedUser = users;
      });
      this.sortData(<Sort>({active: 'id', direction: 'asc'}));
    });
  }

  openDialogUpdate(reader: Reader): void {
    this.flag = true;
    const dialogRef = this.dialog.open(CreateDialogComponent, {
      width: '250px',
      data: {reader: reader, flag: this.flag}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.userservice.getAllUsers().subscribe(users => {
        this.sortedUser = users;
      });
      this.sortData(<Sort>({active: 'id', direction: 'asc'}));
    });
  }

  openDialogForDeleteUser(id: number): void {
    const dialogRef = this.dialog.open(DeleteDialogReaderComponent, {
      width: '250px',
      data: {id: id}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.userservice.getAllUsers().subscribe(users => this.sortedUser = users);
      this.sortData(<Sort>({active: 'id', direction: 'asc'}));
    });
  }

  sortData(sort: Sort) {
    this.sortedUser = this.users.slice();
    const data = this.users.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedUser = data;
      return;
    }
    this.sortedUser = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'login':
          return compare(a.login, b.login, isAsc);
        default:
          return 0;
      }
    });
  }

  getCurrentUser() {
    this.userservice.getCurrentUser().subscribe(currentUs => {
      this.currentUser = currentUs;
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
