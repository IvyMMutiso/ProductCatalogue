import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from '../models/category';
import { CatalogueService } from '../service/catalogue.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {

  category: Category;
  categoriesForm: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    public readonly router: Router,
    public readonly route: ActivatedRoute,
    private catalogueService: CatalogueService
  ) { }

  ngOnInit() {
    this.initializeForm();
    this.getCategory();
  }

  initializeForm() {
    this.categoriesForm = this.formBuilder.group({
      category: ['', Validators.required]
    });
  }

  getCategory() {
    this.catalogueService.getCategories().subscribe((data: Category) => {
      this.category = data;
      console.log('this.category : ', this.category);
    });
  }

  saveCategory() {
    this.router.navigate(['../product-details'], { relativeTo: this.route });

  }
}
