import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MProyectosComponent } from './m-proyectos.component';

describe('MProyectosComponent', () => {
  let component: MProyectosComponent;
  let fixture: ComponentFixture<MProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MProyectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
