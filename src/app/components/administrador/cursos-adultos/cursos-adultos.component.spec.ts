import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosAdultosComponent } from './cursos-adultos.component';

describe('CursosAdultosComponent', () => {
  let component: CursosAdultosComponent;
  let fixture: ComponentFixture<CursosAdultosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosAdultosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosAdultosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
