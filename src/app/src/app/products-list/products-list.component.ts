import { Component, inject, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { MatGridListModule } from '@angular/material/grid-list';
import Products from '../../../models/items.models';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [MatGridListModule],
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
