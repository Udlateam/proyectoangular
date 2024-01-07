import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnnRecomendacionesComponent } from './knn-recomendaciones.component';

describe('KnnRecomendacionesComponent', () => {
  let component: KnnRecomendacionesComponent;
  let fixture: ComponentFixture<KnnRecomendacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KnnRecomendacionesComponent]
    });
    fixture = TestBed.createComponent(KnnRecomendacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
