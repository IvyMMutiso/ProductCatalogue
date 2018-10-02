import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsReportComponent } from './products-report/products-report.component';
import { CatalogueService } from './service/catalogue.service';

import {
  MatToolbarModule,
  MatExpansionModule,
  MatButtonModule,
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule,
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

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    CategoryDetailsComponent,
    ProductsListComponent,
    ProductsReportComponent
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
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule
  ],
  providers: [
    CatalogueService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
