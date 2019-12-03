import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompsformArrayComponent } from './compsform-array.component';

describe('CompsformArrayComponent', () => {
  let component: CompsformArrayComponent;
  let fixture: ComponentFixture<CompsformArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompsformArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompsformArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
