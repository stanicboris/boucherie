import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.scss']
})
export class StoreDetailComponent implements OnInit {

  public store: any;
  public id: number;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private location: Location
  ) { }

  ngOnInit() {
    // this.getStore();
    this.route.params.subscribe((param: any) => {
      this.id = +param.id;
      this.getStore(this.id);
    });

  }

  getStore (id: number) {
    this.api.getStores()
      .subscribe(data => {
        this.store = data[this.id];
      });
  }



}
