import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsCatalogueComponent } from './products-catalogue/products-catalogue.component';
import { AddEditProductsComponent } from './add-edit-products/add-edit-products.component';
import { AddEditCategoriesComponent } from './add-edit-categories/add-edit-categories.component';
import { ProductsReportComponent } from './products-report/products-report.component';

const routes: Routes = [
  { path: '', component: ProductsCatalogueComponent },
  {
    path: 'products',
    component: ProductsCatalogueComponent,
    children: [
      { path: 'product-details', component: AddEditProductsComponent },
      { path: 'category-details', component: AddEditCategoriesComponent },
      { path: 'report', component: ProductsReportComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
