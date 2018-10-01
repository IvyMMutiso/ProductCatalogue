import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  constructor(
    public router: Router,
    public route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  addCategory() {
    this.router.navigate(['../category-details'], { relativeTo: this.route });

  }

  addProducts() {
    this.router.navigate(['../product-details'], { relativeTo: this.route });

  }
}
