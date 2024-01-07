import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteresesUsuariosComponent } from './intereses-usuarios.component';

describe('InteresesUsuariosComponent', () => {
  let component: InteresesUsuariosComponent;
  let fixture: ComponentFixture<InteresesUsuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InteresesUsuariosComponent]
    });
    fixture = TestBed.createComponent(InteresesUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
