import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteInteresComponent } from './cliente-interes.component';

describe('ClienteInteresComponent', () => {
  let component: ClienteInteresComponent;
  let fixture: ComponentFixture<ClienteInteresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteInteresComponent]
    });
    fixture = TestBed.createComponent(ClienteInteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
