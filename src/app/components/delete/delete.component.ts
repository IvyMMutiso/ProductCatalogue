import { Component, OnInit, Inject } from "@angular/core";
import { Category } from "../../models/category";
import { Product } from "../../models/product";
import { CatalogueService } from "../../service/catalogue.service";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { AddUpdateResponse } from "../../models/addupdateresponse";

@Component({
  selector: "app-delete",
  templateUrl: "./delete.component.html",
  styleUrls: ["./delete.component.scss"]
})
export class DeleteComponent implements OnInit {
  category: Category;
  product: Product;
  header: string;
  deleteText: string;
  productObject: boolean;

  constructor(
    private catalogueService: CatalogueService,
    private readonly dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    const properties = Object.getOwnPropertyNames(this.data);
    this.productObject = properties.includes("product_id");
    if (this.productObject) {
      this.product = this.data;
      this.header = "Product";
      this.deleteText = this.product.product;
    } else {
      this.category = this.data;
      this.header = "Category";
      this.deleteText = this.category.name;
    }
  }

  deleteItem() {
    if (this.productObject) {
      this.product.active = false;
      this.catalogueService
        .updateProduct(this.product)
        .subscribe((response: AddUpdateResponse) => {
          this.closeDialog();
        });
    } else {
      this.category.active = false;
      this.catalogueService
        .updateCategory(this.category)
        .subscribe((response: AddUpdateResponse) => {
          this.closeDialog();
        });
    }
  }

  cancel() {
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close("close");
  }
}
