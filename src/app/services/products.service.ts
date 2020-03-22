import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ProductIdx } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: ProductIdx[] = [];
  allProducts: ProductIdx[] = [];
  isLoading = true;


  constructor(private http: HttpClient) {
    this.loadProducts();
  }

  public loadProducts() {
    return new Promise((resolve, reject) => {
      this.http.get(`${environment.firebaseEndpoint}/products_idx.json`).subscribe((res: ProductIdx[]) => {
        this.products = res;
        this.allProducts = res;
        this.isLoading = false;
        resolve();
      });
    });

  }

  getProduct(id: string) {
    return this.http.get(`${environment.firebaseEndpoint}/products/${id}.json`);
  }

  async searchProducts(term: string) {
    if (this.allProducts.length === 0) {
      await this.loadProducts();
      this.filterProducts(term);
    } else {
      this.filterProducts(term);
    }
  }

  private async filterProducts(term: string){
    if (term.length > 0) {
      this.products = this.allProducts.filter(prod =>
        prod.categoria.toLowerCase().includes(term) || prod.titulo.toLowerCase().includes(term));
    }
  }

  cleanFilter(){
    if (this.allProducts.length > this.products.length) {
      this.products = this.allProducts;
    }
  }

}
