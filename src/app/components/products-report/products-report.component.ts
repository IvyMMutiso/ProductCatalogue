import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { CatalogueService } from '../../service/catalogue.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products-report',
  templateUrl: './products-report.component.html',
  styleUrls: ['./products-report.component.scss']
})
export class ProductsReportComponent implements OnInit {
  products: Product[];
  categories: Category[];

  pieChartLabels: string[]; // = ['Beverages', 'Grains and Flour', 'Phone Accessories'];
  pieChartData: number[]; // = [300, 500, 100];
  public pieChartType = 'pie';

  constructor(private catalogueService: CatalogueService) {}

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.catalogueService.getProducts().subscribe((products: Product[]) => {
      this.products = products;

      this.catalogueService.getCategories().subscribe((categories: Category[]) => {
          this.categories = categories;

          this.pieChartLabels = [];
          this.pieChartData = [];
          if (!!this.categories) {
            this.categories.forEach(category => {
              this.pieChartLabels.push(category.name);

              const filter = this.products.filter(product => {
                return product.category.toLowerCase() === category.name.toLowerCase();
              });
              this.pieChartData.push(filter.length);
            });
          }
        });
    });
  }
}
