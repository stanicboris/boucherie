import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {

  constructor(private api: ApiService) { }

  public stores: any;

  ngOnInit() {
    this.api.getStores()
      .subscribe(data => {
        // console.log(data);
        this.stores = data;
      });
  }

}
