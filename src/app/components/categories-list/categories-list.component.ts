import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { CatalogueService } from '../../service/catalogue.service';
import { CategoryDetailsComponent } from '../category-details/category-details.component';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  categories: Category[];
  displayedColumns: string[] = ['categoryName', 'actions'];
  dataSource: MatTableDataSource<Category>;

  constructor(private catalogueService: CatalogueService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.catalogueService.getCategories().subscribe((categories: Category[]) => {
      this.categories = categories;
      console.log('this.categories : ', this.categories);

      this.dataSource = new MatTableDataSource(this.categories);
    });
  }

  addCategory() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(CategoryDetailsComponent, dialogConfig);

    // this.dialog.open(ExtensionPreviewUseModeComponent, {
    //   data: { extensionId: this.data.extensionId, allControls: this.data.allControls, extensionPreviewId: this.extensionPreviewId },
    //   panelClass: "preview-use-mode-dialog",
    //   disableClose: true,
    // });
    // this.router.navigate(['../product-details'], { relativeTo: this.route });

  }

  editProduct(element) {
    console.log(element);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(CategoryDetailsComponent, dialogConfig);
  }

}
