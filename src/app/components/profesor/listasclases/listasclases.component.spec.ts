import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasclasesComponent } from './listasclases.component';

describe('ListasclasesComponent', () => {
  let component: ListasclasesComponent;
  let fixture: ComponentFixture<ListasclasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListasclasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasclasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
