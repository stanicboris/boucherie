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

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getStore();
  }

  getStore () {
    const id = +this.route.snapshot.paramMap.get('id');
    this.api.getStores()
      .subscribe(data => {
        // console.log(data);
        this.store = data[id];
      });
  }

}
