import { Component, OnInit, Inject } from "@angular/core";
import { CatalogueService } from "../../service/catalogue.service";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Category } from "../../models/category";
import { AddUpdateResponse } from "../../models/addupdateresponse";

@Component({
  selector: "app-delete-category",
  templateUrl: "./delete-category.component.html",
  styleUrls: ["./delete-category.component.scss"]
})
export class DeleteCategoryComponent implements OnInit {
  category: Category;

  constructor(
    private catalogueService: CatalogueService,
    private readonly dialogRef: MatDialogRef<DeleteCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Category
  ) {}

  ngOnInit() {
    this.category = this.data;
  }

  deleteCategory() {
    this.category.active = false;
    this.catalogueService
      .updateCategory(this.category)
      .subscribe((response: AddUpdateResponse) => {
        this.closeDialog();
      });
  }

  cancel() {
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close("close");
  }
}
