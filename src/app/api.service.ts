import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  // private url = 'http://static.singlespot.com/tests/la_boucherie/api/';
  private url = 'assets/json/stores.json';

  constructor(private http: HttpClient) { }

  getStores() {
    console.log('init stores');
    return this.http.get(this.url);

  }

}
