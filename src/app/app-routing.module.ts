import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsReportComponent } from './products-report/products-report.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';

// const routes: Routes = [
//   { path: 'products', loadChildren: './modules/products/products.module#ProductsModule' },
//   // { path: 'products', component: ProductsCatalogueComponent },
//   { path: '', redirectTo: '/products', pathMatch: 'full' },
//   { path: '**', redirectTo: '/products' },
// ];


// const routes: Routes = [
//   { path: '', redirectTo: '/products', pathMatch: 'full' },
//   { path: 'products',  component: ProductsCatalogueComponent },
//   { path: 'product-details', component: AddEditProductsComponent },
//   { path: 'category-details',  component: AddEditCategoriesComponent },
//   { path: 'report',  component: ProductsReportComponent }
// ];


const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products',  component: ProductsListComponent },
  { path: 'categories',  component: CategoriesListComponent },
  { path: 'report',  component: ProductsReportComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
