import { Component, OnInit } from "@angular/core";
import { Category } from "../../models/category";
import {
  MatTableDataSource,
  MatDialog,
  MatDialogConfig
} from "@angular/material";
import { CatalogueService } from "../../service/catalogue.service";
import { CategoryDetailsComponent } from "../category-details/category-details.component";
import { Observable } from "rxjs";
import { DeleteComponent } from "../delete/delete.component";

@Component({
  selector: "app-categories-list",
  templateUrl: "./categories-list.component.html",
  styleUrls: ["./categories-list.component.scss"]
})
export class CategoriesListComponent implements OnInit {
  categories: Category[];
  categories$: Observable<Category[]>;
  displayedColumns: string[] = ["categoryName", "actions"];
  dataSource: MatTableDataSource<Category>;

  constructor(
    private catalogueService: CatalogueService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categories$ = this.catalogueService.getCategories();
    this.categories$.subscribe(categories => {
      this.categories = categories;
      this.dataSource = new MatTableDataSource(this.categories);
    });
  }

  addCategory() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.minWidth = "450px";

    this.dialog
      .open(CategoryDetailsComponent, dialogConfig)
      .afterClosed()
      .subscribe(result => {
        this.getCategories();
      });
  }

  editCategory(element) {
    this.showDialog(CategoryDetailsComponent, element);
  }

  deleteCategory(element) {
    this.showDialog(DeleteComponent, element);
  }

  showDialog(component, element) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog
      .open(component, {
        width: "450px",
        data: element
      })
      .afterClosed()
      .subscribe(result => {
        this.getCategories();
      });
  }
}
