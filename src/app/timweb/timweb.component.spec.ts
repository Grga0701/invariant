/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TimwebComponent } from './timweb.component';

describe('TimwebComponent', () => {
  let component: TimwebComponent;
  let fixture: ComponentFixture<TimwebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimwebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimwebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
