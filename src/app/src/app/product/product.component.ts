import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatCardModule, MatButton, CurrencyPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input({ required: true }) product!: {};
  @Input({ required: true }) image: string = '';
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) price: string = '';

  addToCart(product: {}) {
    console.log(product);
  }
}
