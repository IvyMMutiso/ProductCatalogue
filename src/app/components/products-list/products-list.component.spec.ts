import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListComponent } from './products-list.component';
import { DebugElement } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;
  let debug: DebugElement;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsListComponent ],
      imports: [BrowserModule, FormsModule, ReactiveFormsModule]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(ProductsListComponent);
      component = fixture.componentInstance;
      debug = fixture.debugElement.query(By.css('form'));
      element = debug.nativeElement;
    });
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(ProductsListComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
