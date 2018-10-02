import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css', '../../styles/inputs.css']
})
export class CategoryDetailsComponent implements OnInit {

  constructor(
    public router: Router,
    public route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  saveCategory() {
    this.router.navigate(['../product-details'], { relativeTo: this.route });

  }
}
