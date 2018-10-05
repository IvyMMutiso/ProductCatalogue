import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsComponent } from './product-details.component';
import { DebugElement } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;
  let debug: DebugElement;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailsComponent ],
      imports: [BrowserModule, FormsModule, ReactiveFormsModule]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(ProductDetailsComponent);
      component = fixture.componentInstance;
      debug = fixture.debugElement.query(By.css('form'));
      element = debug.nativeElement;
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid', async() => {
    component.productsForm.controls['category_id'].setValue('');
    component.productsForm.controls['product'].setValue('');
    expect(component.productsForm.valid).toBeFalsy();
  });

  it('form should be valid', async() => {
    component.productsForm.controls['category_id'].setValue('0');
    component.productsForm.controls['product'].setValue('qwerty');
    expect(component.productsForm.valid).toBeTruthy();
  });
});
