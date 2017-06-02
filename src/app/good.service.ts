import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Good } from './good';

@Injectable()
export class GoodService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private goodsUrl = 'api/goods';  // URL to web api

  constructor(private http: Http) { }

  getGoods(): Promise<Good[]> {
    return this.http.get(this.goodsUrl)
      .toPromise()
      .then(response => response.json().data as Good[])
      .catch(this.handleError);
  }
  getGood(id: number): Promise<Good> {
    const url = `${this.goodsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Good)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
