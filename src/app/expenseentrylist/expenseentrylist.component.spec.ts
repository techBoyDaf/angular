import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseentrylistComponent } from './expenseentrylist.component';

describe('ExpenseentrylistComponent', () => {
  let component: ExpenseentrylistComponent;
  let fixture: ComponentFixture<ExpenseentrylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseentrylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseentrylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
