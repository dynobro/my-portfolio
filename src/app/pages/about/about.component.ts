import { Component, OnInit } from '@angular/core';
import { PageInfoService } from '../../services';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public page: PageInfoService) { }

  ngOnInit(): void {

  }

}
