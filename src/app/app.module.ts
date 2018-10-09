import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MAT_DIALOG_DEFAULT_OPTIONS } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { CatalogueService } from "./service/catalogue.service";

import {
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatTableModule
} from "@angular/material";
import { CategoriesListComponent } from "./components/categories-list/categories-list.component";
import { CategoryDetailsComponent } from "./components/category-details/category-details.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { ProductsReportComponent } from "./components/products-report/products-report.component";
import { ChartsModule } from "ng2-charts";
import { ProductsListComponent } from "./components/products-list/products-list.component";
import { DeleteComponent } from "./components/delete/delete.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    CategoryDetailsComponent,
    ProductsListComponent,
    ProductsReportComponent,
    CategoriesListComponent,
    DeleteComponent
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
    ProductsReportComponent,
    DeleteComponent
  ],
  providers: [
    CatalogueService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
