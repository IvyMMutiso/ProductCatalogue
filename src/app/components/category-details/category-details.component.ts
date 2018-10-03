import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from '../../models/category';
import { CatalogueService } from '../../service/catalogue.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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
    private readonly dialogRef: MatDialogRef<CategoryDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Category
  ) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.categoriesForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
    this.categoriesForm.valueChanges.subscribe(value => {
      this.category = value;
    });
    if (!!this.data) {
      this.category = this.data;
      this.categoriesForm.get('name').setValue(this.category.name);
    }
  }

  saveCategory() {
    if (this.data !== null) {
      this.category.id = this.data.id;
      this.category.active = true;
      this.catalogueService.updateCategory(this.category);
    } else {
      this.catalogueService.addCategory(this.category);
    }
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
