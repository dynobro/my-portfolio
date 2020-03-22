import { Component } from '@angular/core';
import { PageInfoService, ProductsService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private pageInfoService: PageInfoService,
    private productService: ProductsService,
  ) {}
}
