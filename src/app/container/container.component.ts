import { Component, ViewChild } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NgIf } from '@angular/common';
import { FeaturedBrandsComponent } from './featured-brands/featured-brands.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [
    SearchComponent,
    ProductListComponent,
    ProductDetailComponent,
    NgIf,
    FeaturedBrandsComponent,
  ],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  listOfString: string[] = ['Mark', 'Steve', 'Merry', 'John', 'Sarah'];

  searchText: string = '';

  @ViewChild('productListComponent') productListComponent: ProductListComponent;

  setSearchText(value: string) {
    this.searchText = value;
  }
}
