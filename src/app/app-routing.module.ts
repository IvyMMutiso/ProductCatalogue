import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoriesListComponent } from "./components/categories-list/categories-list.component";
import { ProductsReportComponent } from "./components/products-report/products-report.component";
import { ProductsListComponent } from "./components/products-list/products-list.component";

const routes: Routes = [
  { path: "", redirectTo: "products", pathMatch: "full" },
  { path: "products", component: ProductsListComponent },
  { path: "categories", component: CategoriesListComponent },
  { path: "report", component: ProductsReportComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
