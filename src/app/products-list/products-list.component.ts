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

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Product[];
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
    this.catalogueService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
      console.log('this.products : ', this.products);

      this.dataSource = new MatTableDataSource(this.products);
    });
  }

  addProducts() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(ProductDetailsComponent, dialogConfig);
    this.router.navigate(['../products'], { relativeTo: this.route });
  }

  editProduct(element) {
    console.log(element);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    // this.dialog.open(ProductDetailsComponent, dialogConfig);
    this.dialog.open(ProductDetailsComponent, {
      data: element
    });
  }

  deleteProduct(element) {
    console.log('element : ', element);
  }
}
