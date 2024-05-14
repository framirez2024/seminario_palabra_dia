import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableroCustomComponent } from './tablero-custom.component';

describe('TableroCustomComponent', () => {
  let component: TableroCustomComponent;
  let fixture: ComponentFixture<TableroCustomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableroCustomComponent]
    });
    fixture = TestBed.createComponent(TableroCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
