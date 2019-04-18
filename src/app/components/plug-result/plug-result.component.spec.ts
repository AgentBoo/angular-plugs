import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlugResultComponent } from './plug-result.component';

describe('PlugResultComponent', () => {
  let component: PlugResultComponent;
  let fixture: ComponentFixture<PlugResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlugResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlugResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
