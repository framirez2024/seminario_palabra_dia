import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscogerNivelComponent } from './escoger-nivel.component';

describe('EscogerNivelComponent', () => {
  let component: EscogerNivelComponent;
  let fixture: ComponentFixture<EscogerNivelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EscogerNivelComponent]
    });
    fixture = TestBed.createComponent(EscogerNivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
