// Observable Version
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Coffeeshop } from './coffeeshop';

@Injectable()
export class CoffeeshopService {
  // private headers = new Headers({'Content-Type': 'application/json'});
  private coffeeshopsUrl = 'http://coffee-points.net/api/cafes';

  constructor (private http: Http) {}

  getCoffeeshops(): Promise<string> {
    return this.http.get(this.coffeeshopsUrl)
      .toPromise()
      // .then(response => response.json().data as Coffeeshop[])
      .then(response => JSON.stringify(response.json()) as string);
  }
}
