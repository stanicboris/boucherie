import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private api: ApiService) { }
  title = 'app'; 
  public stores: any;

  ngOnInit() {
    this.api.getStores()
      .subscribe(data => {
        console.log(data);
        this.stores = data;
      });
  }
}
