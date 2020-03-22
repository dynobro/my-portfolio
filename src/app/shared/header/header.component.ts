import { Component, OnInit } from '@angular/core';
import { PageInfoService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public page: PageInfoService,
    private router: Router
  ) { }

  ngOnInit(): void { }


  searchProduct(term: string): void {
    if (term.length < 1) {
      return;
    }
    this.router.navigate(['/search', term]);
  }

}
