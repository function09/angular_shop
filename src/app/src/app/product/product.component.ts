import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  // @Input({ required: true }) image: string = '';
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) price: string = '';
}
