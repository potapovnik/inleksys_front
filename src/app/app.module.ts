import { BrowserModule } from '@angular/platform-browser';
import {Input, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { DeleteDialogComponent } from './books/delete-dialog/delete-dialog.component';
import {MatDialogModule, MatFormField, MatFormFieldModule, MatInputModule, MatTableModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReaderComponent } from './reader/reader.component';
import {HttpClientModule} from '@angular/common/http';
import {MatSortModule} from '@angular/material/sort';
import { CreateDialogComponent } from './reader/create-dialog/create-dialog.component';
import {FormsModule} from '@angular/forms';
import {CreateDialogBookComponent} from './books/create-dialog-book/create-dialog-book.component';
import { DeleteDialogReaderComponent } from './reader/delete-dialog-reader/delete-dialog-reader.component';
import {CommonModule, NgTemplateOutlet} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    DeleteDialogComponent,
    ReaderComponent,
    CreateDialogComponent,
    CreateDialogBookComponent,
    DeleteDialogReaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatSortModule,
    MatTableModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule
  ],
  entryComponents: [DeleteDialogComponent, CreateDialogComponent, CreateDialogBookComponent, DeleteDialogReaderComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
