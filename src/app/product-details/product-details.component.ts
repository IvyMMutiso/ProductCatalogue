import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  productsForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder,
    public readonly router: Router,
    public readonly route: ActivatedRoute) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.productsForm = this.formBuilder.group({
      category: ['', Validators.required],
      product: ['', Validators.required]
    });
  }

}
