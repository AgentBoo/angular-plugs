import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlugReferenceComponent } from './plug-reference.component';

describe('PlugReferenceComponent', () => {
  let component: PlugReferenceComponent;
  let fixture: ComponentFixture<PlugReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlugReferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlugReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
