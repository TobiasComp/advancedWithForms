import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsNavComponent } from './forms-nav.component';

describe('FormsNavComponent', () => {
  let component: FormsNavComponent;
  let fixture: ComponentFixture<FormsNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
