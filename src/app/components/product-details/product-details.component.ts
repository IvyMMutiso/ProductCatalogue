import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Category } from '../../models/category';
import { Product } from '../../models/product';
import { CatalogueService } from '../../service/catalogue.service';


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
    private catalogueService: CatalogueService,
    @Inject(MAT_DIALOG_DATA) public data: Product
  ) {}

  ngOnInit() {
    this.getCategories();
    this.initializeForm();
  }

  initializeForm() {
    this.productsForm = this.formBuilder.group({
      category_id: ['', Validators.required],
      product: ['', Validators.required]
    });
    this.productsForm.valueChanges.subscribe(value => {
      this.product = value;
    });
    if (!!this.data) {
      this.product = this.data;
      this.productsForm.get('category_id').setValue(this.product.category_id);
      this.productsForm.get('product').setValue(this.product.product);
    }
  }

  getCategories() {
    this.catalogueService.getCategories().subscribe((categories: Category[]) => {
      this.categories = categories;
    });
  }

  saveProduct() {
    if (this.data !== null) {
      this.product.product_id = this.data.product_id;
      // this.product.category_id = this.data.product_id;
      // this.product.product = this.data.product_id;
      this.product.active = true;
      this.catalogueService.updateProduct(this.product);
    } else {
      this.catalogueService.addProduct(this.product);
    }
    this.closeDialog();
    this.router.navigate(['../products'], { relativeTo: this.route });

    // this.catalogueService.addProduct(this.product);
    // this.closeDialog();
  }

  cancel() {
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
