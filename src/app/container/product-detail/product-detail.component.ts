import { Component, DoCheck, ElementRef, Input } from '@angular/core';
import { Product } from '../../Models/Product';
import { ProductListComponent } from '../product-list/product-list.component';
import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { SetBackground } from '../../CustomDirectives/SetBackground.directive';
import { AppHoverDirective } from '../../CustomDirectives/app-hover.directive';
import { DisableProductDirective } from '../../CustomDirectives/disable-product.directive';



@Component({
  selector: 'product-detail',
  standalone: true,
  imports: [NgIf, NgStyle, NgFor, SetBackground, AppHoverDirective, NgClass, DisableProductDirective],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements DoCheck {


  @Input() productListComponent: ProductListComponent = undefined;

  product: Product;

  ngDoCheck() {
    console.log(this.productListComponent.selectedProduct.imageURL)
    this.product = this.productListComponent.selectedProduct;
  }

  closeProductDetailComponent(){
    this.productListComponent.selectedProduct = undefined;
  }
}
