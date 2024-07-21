import { Component, inject, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [MatGridListModule, ProductComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
})
export class ProductsListComponent implements OnInit {
  http = inject(HttpService);
  productsList: any;

  ngOnInit(): void {
    this.http.getProducts().subscribe({
      next: (items) => {
        this.productsList = items;
      },
    });
  }
}
