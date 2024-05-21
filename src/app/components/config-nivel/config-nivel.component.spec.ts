import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigNivelComponent } from './config-nivel.component';

describe('ConfigNivelComponent', () => {
  let component: ConfigNivelComponent;
  let fixture: ComponentFixture<ConfigNivelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigNivelComponent]
    });
    fixture = TestBed.createComponent(ConfigNivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
