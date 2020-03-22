import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(public productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.cleanFilter();
  }

}
