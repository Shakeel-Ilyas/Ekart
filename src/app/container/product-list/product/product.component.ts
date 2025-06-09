import { NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../../Models/Product';
import { DisableProductDirective } from '../../../CustomDirectives/disable-product.directive';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgIf, NgStyle, DisableProductDirective],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input()
  product: Product;
}
