import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {

  categoriesForm: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    public readonly router: Router,
    public readonly route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.categoriesForm = this.formBuilder.group({
      category: ['', Validators.required]
    });
  }

  saveCategory() {
    this.router.navigate(['../product-details'], { relativeTo: this.route });

  }
}
