import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Coffeeshop } from './coffeeshop';

@Injectable()
export class CoffeeshopService {
  private coffeeshopsUrl = 'http://coffee-points.net/api/cafes';

  constructor (private http: Http) {}

  getCoffeeshops(): Promise<Coffeeshop[]> {
    return this.http.get(this.coffeeshopsUrl)
      .toPromise()
      .then(response => response.json() as Coffeeshop[]);
  }
}
