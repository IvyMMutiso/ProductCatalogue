import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { CatalogueService } from './service/catalogue.service';

import {
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule,
  MatDialogModule,
  MatIconModule,
  MatGridListModule,
  MatInputModule,
  MatMenuModule,
  MatSort,
  MatSortHeader,
  MatSortModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatListModule
} from '@angular/material';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';
import { DeleteCategoryComponent } from './components/delete-category/delete-category.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsReportComponent } from './components/products-report/products-report.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    CategoryDetailsComponent,
    ProductsListComponent,
    ProductsReportComponent,
    CategoriesListComponent,
    DeleteProductComponent,
    DeleteCategoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatDialogModule,
    MatTableModule,
    MatIconModule,
    ChartsModule
  ],
  entryComponents: [
    CategoryDetailsComponent,
    ProductDetailsComponent,
    DeleteProductComponent,
    DeleteCategoryComponent,
    ProductsReportComponent
  ],
  providers: [
    CatalogueService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
