import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import {
  MatDialogConfig,
  MatDialog,
  MatTableDataSource
} from "@angular/material";
import { Observable } from "rxjs";
import { Product } from "../../models/product";
import { CatalogueService } from "../../service/catalogue.service";
import { ProductDetailsComponent } from "../product-details/product-details.component";
import { DeleteProductComponent } from "../delete-product/delete-product.component";

@Component({
  selector: "app-products-list",
  templateUrl: "./products-list.component.html",
  styleUrls: ["./products-list.component.scss"]
})
export class ProductsListComponent implements OnInit {
  products: Product[];
  products$: Observable<Product[]>;
  displayedColumns: string[] = ["productName", "categoryName", "actions"];
  dataSource: MatTableDataSource<Product>;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    private catalogueService: CatalogueService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.products$ = this.catalogueService.getProducts();
    this.products$.subscribe(products => {
      this.products = products;
      this.dataSource = new MatTableDataSource(this.products);
    });
  }

  addProducts() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.minWidth = "450px";

    this.dialog
      .open(ProductDetailsComponent, dialogConfig)
      .afterClosed()
      .subscribe(result => {
        this.getProducts();
      });
  }

  editProduct(element) {
    this.showDialog(ProductDetailsComponent, element);
  }

  deleteProduct(element) {
    this.showDialog(DeleteProductComponent, element);
  }

  showDialog(component, product) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(component, {
      data: product,
      panelClass: "product-dialog"
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getProducts();
      }
    });
  }
}
