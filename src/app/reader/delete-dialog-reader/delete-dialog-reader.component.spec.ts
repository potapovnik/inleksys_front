import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDialogReaderComponent } from './delete-dialog-reader.component';

describe('DeleteDialogReaderComponent', () => {
  let component: DeleteDialogReaderComponent;
  let fixture: ComponentFixture<DeleteDialogReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteDialogReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDialogReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
