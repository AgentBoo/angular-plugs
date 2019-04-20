import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlugCompatibilityComponent } from './plug-compatibility.component';

describe('PlugCompatibilityComponent', () => {
  let component: PlugCompatibilityComponent;
  let fixture: ComponentFixture<PlugCompatibilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlugCompatibilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlugCompatibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
