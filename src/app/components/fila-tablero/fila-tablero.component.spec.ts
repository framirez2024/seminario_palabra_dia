import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilaTableroComponent } from './fila-tablero.component';

describe('FilaTableroComponent', () => {
  let component: FilaTableroComponent;
  let fixture: ComponentFixture<FilaTableroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilaTableroComponent]
    });
    fixture = TestBed.createComponent(FilaTableroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
