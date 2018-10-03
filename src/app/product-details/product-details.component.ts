import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialogRef } from '@angular/material';
import { CatalogueService } from '../service/catalogue.service';
import { Category } from '../models/category';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productsForm: FormGroup;
  categories: Category[];
  product: Product;

  constructor(
    private readonly formBuilder: FormBuilder,
    public readonly router: Router,
    public readonly route: ActivatedRoute,
    private readonly dialogRef: MatDialogRef<ProductDetailsComponent>,
    private catalogueService: CatalogueService
  ) {}

  ngOnInit() {
    this.initializeForm();
    this.getCategories();
  }

  initializeForm() {
    this.productsForm = this.formBuilder.group({
      category_id: ['', Validators.required],
      product: ['', Validators.required]
    });
    this.productsForm.valueChanges.subscribe(value => {
      this.product = value;
    });
  }

  getCategories() {
    this.catalogueService.getCategories().subscribe((categories: Category[]) => {
      this.categories = categories;
      console.log('this.category : ', this.categories);
    });
  }

  saveProduct() {
    this.catalogueService.addProduct(this.product);
    this.closeDialog();
  }

  cancel() {
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
