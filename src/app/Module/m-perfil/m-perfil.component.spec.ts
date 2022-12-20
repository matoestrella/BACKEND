import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MPerfilComponent } from './m-perfil.component';

describe('MPerfilComponent', () => {
  let component: MPerfilComponent;
  let fixture: ComponentFixture<MPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MPerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
