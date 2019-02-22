import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDialogBookComponent } from './create-dialog-book.component';

describe('CreateDialogBookComponent', () => {
  let component: CreateDialogBookComponent;
  let fixture: ComponentFixture<CreateDialogBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDialogBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDialogBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
