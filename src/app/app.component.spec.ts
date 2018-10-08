import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { CategoriesListComponent } from "./components/categories-list/categories-list.component";
import { CategoryDetailsComponent } from "./components/category-details/category-details.component";
import { ProductsReportComponent } from "./components/products-report/products-report.component";
import { ProductsListComponent } from "./components/products-list/products-list.component";
describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ProductsListComponent,
        ProductDetailsComponent,
        CategoriesListComponent,
        CategoryDetailsComponent,
        ProductsReportComponent
      ]
    }).compileComponents();
  }));
  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Product Catalogue'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual(
      "Angular Unit Testing for title Product Catalogue"
    );
  }));
  it("should render title in a h1 tag", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h1").textContent).toContain(
      "Welcome to Product Catalogue!"
    );
  }));
});
