import { Component, OnInit } from '@angular/core';
import { PageInfoService } from '../../services';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public page: PageInfoService) { }

  ngOnInit(): void {
  }

}
