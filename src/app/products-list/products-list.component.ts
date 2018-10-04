import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CatalogueService } from '../service/catalogue.service';
import { Product } from '../models/product';
import {
  MatDialogConfig,
  MatDialog,
  MatTableDataSource
} from '@angular/material';
import { ProductDetailsComponent } from '../components/product-details/product-details.component';
import { DeleteProductComponent } from '../components/delete-product/delete-product.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Product[];
  products$: Observable<Product[]>;
  displayedColumns: string[] = ['productName', 'categoryName', 'actions'];
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
    console.log(this.products$);
    this.products$.subscribe(cat => {
      this.products = cat;
      console.log(this.products);
      this.dataSource = new MatTableDataSource(this.products);
    });
    // this.catalogueService.getProducts().subscribe((data: Product[]) => {
    //   this.products = data;

    //   this.dataSource = new MatTableDataSource(this.products);
    // });
  }

  addProducts() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(ProductDetailsComponent, dialogConfig);
    this.router.navigate(['../products'], { relativeTo: this.route });
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
      data: product
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getProducts();
      }
      // this.categories = result;
    });
    // this.dialog.open(ProductDetailsComponent, dialogConfig);
    // this.dialog.open(component, {
    //   data: product
    // });
  }
}
