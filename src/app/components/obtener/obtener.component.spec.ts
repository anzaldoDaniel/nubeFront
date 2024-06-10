import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerComponent } from './obtener.component';

describe('ObtenerComponent', () => {
  let component: ObtenerComponent;
  let fixture: ComponentFixture<ObtenerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObtenerComponent]
    });
    fixture = TestBed.createComponent(ObtenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
