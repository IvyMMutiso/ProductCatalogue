import { Component, OnInit, Inject } from '@angular/core';
import { CatalogueService } from '../../service/catalogue.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Product } from '../../models/product';
import { AddUpdateResponse } from '../../models/addupdateresponse';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {

  product: Product;

  constructor(
    private catalogueService: CatalogueService,
    private readonly dialogRef: MatDialogRef<DeleteProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product) { }

  ngOnInit() {
    this.product = this.data;
  }

  deleteProduct() {
    this.product.active = false;
    this.catalogueService.updateProduct(this.product).subscribe((response: AddUpdateResponse) => {
      this.closeDialog();
    });
  }

  cancel() {
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close('close');
  }
}
