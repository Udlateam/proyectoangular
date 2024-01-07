import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TendenciasInteresesComponent } from './tendencias-intereses.component';

describe('TendenciasInteresesComponent', () => {
  let component: TendenciasInteresesComponent;
  let fixture: ComponentFixture<TendenciasInteresesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TendenciasInteresesComponent]
    });
    fixture = TestBed.createComponent(TendenciasInteresesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
