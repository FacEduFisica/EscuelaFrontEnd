import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiarioclasesComponent } from './diarioclases.component';

describe('DiarioclasesComponent', () => {
  let component: DiarioclasesComponent;
  let fixture: ComponentFixture<DiarioclasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiarioclasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiarioclasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
