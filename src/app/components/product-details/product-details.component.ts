import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Category } from "../../models/category";
import { Product } from "../../models/product";
import { CatalogueService } from "../../service/catalogue.service";
import { AddUpdateResponse } from "../../models/addupdateresponse";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"]
})
export class ProductDetailsComponent implements OnInit {
  productsForm: FormGroup;
  categories: Category[];
  product: Product;
  duplicateProduct: boolean;

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
    this.duplicateProduct = false;
  }

  initializeForm() {
    this.productsForm = this.formBuilder.group({
      category_id: ["", Validators.required],
      product: ["", Validators.required]
    });
    this.productsForm.valueChanges.subscribe(value => {
      this.product = value;
    });
    this.productsForm.controls["product"].valueChanges.subscribe(value => {
      this.duplicateProduct = false;
    });

    if (!!this.data) {
      this.product = this.data;
      this.productsForm.patchValue({
        category_id: this.product.category_id,
        product: this.product.product
      });
    }
  }

  getCategories() {
    this.catalogueService
      .getCategories()
      .subscribe((categories: Category[]) => {
        this.categories = categories;
      });
  }

  saveProduct() {
    if (this.data !== null) {
      this.product.product_id = this.data.product_id;
      this.product.active = true;
      this.updateProduct();
    } else {
      this.createProduct();
    }
  }

  updateProduct() {
    this.catalogueService
      .updateProduct(this.product)
      .subscribe((response: AddUpdateResponse) => {
        if (response.success) {
          this.closeDialog();
        } else {
          this.duplicateProduct = true;
        }
      });
  }

  createProduct() {
    this.catalogueService
      .addProduct(this.product)
      .subscribe((response: AddUpdateResponse) => {
        if (response.success) {
          this.closeDialog();
        } else {
          this.duplicateProduct = true;
        }
      });
  }

  cancel() {
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close("close");
  }

  getCategoryErrorMessage() {
    return this.productsForm.get("category_id").hasError("required")
      ? "You must select a category"
      : "";
  }

  getProductErrorMessage() {
    return this.productsForm.get("product").hasError("required")
      ? "Product name is required"
      : "";
  }
}
