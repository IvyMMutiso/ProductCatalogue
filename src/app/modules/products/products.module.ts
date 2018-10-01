import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsCatalogueComponent } from './products-catalogue/products-catalogue.component';
import { AddEditProductsComponent } from './add-edit-products/add-edit-products.component';
import { AddEditCategoriesComponent } from './add-edit-categories/add-edit-categories.component';
import { ProductsReportComponent } from './products-report/products-report.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  declarations: [ProductsCatalogueComponent, AddEditProductsComponent, AddEditCategoriesComponent, ProductsReportComponent]
})
export class ProductsModule { }
