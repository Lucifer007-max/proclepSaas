import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-root',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  title = 'saas';

  constructor(private ngxService: NgxUiLoaderService) {}

  ngOnInit() {
    console.log('object')
    this.ngxService.start();

  }
}
