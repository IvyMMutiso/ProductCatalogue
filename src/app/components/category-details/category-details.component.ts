import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from '../../models/category';
import { CatalogueService } from '../../service/catalogue.service';
import { MatDialogRef } from '@angular/material';

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
    private catalogueService: CatalogueService,
    private readonly dialogRef: MatDialogRef<CategoryDetailsComponent>
  ) { }

  ngOnInit() {
    this.initializeForm();
    this.getCategory();
  }

  initializeForm() {
    this.categoriesForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
    this.categoriesForm.valueChanges.subscribe(value => {
      this.category = value;
    });
  }

  getCategory() {
    this.catalogueService.getCategoryById().subscribe((data: Category) => {
      this.category = data;
      console.log('this.category : ', this.category);
    });
  }

  saveCategory() {
    this.catalogueService.addCategory(this.category);
    this.closeDialog();
    this.router.navigate(['../categories'], { relativeTo: this.route });
  }

  cancel() {
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
