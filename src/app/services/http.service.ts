import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Product from '../models/items.models';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  url = 'https://fakestoreapi.com/';

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url + 'products');
  }
}
