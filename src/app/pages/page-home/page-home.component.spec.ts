/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageHomeComponent } from './page-home.component';

describe('HomeComponent', () => {
  let component: PageHomeComponent;
  let fixture: ComponentFixture<PageHomeComponent>;

  // tslint:disable-next-line: deprecation
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageHomeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
