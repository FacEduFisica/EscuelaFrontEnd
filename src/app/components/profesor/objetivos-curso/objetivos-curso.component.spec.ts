import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetivosCursoComponent } from './objetivos-curso.component';

describe('ObjetivosCursoComponent', () => {
  let component: ObjetivosCursoComponent;
  let fixture: ComponentFixture<ObjetivosCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjetivosCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetivosCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
