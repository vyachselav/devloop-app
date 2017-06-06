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

/*  getCoffeeshop(id: number): Promise<Coffeeshop> {
    return this.getCoffeeshops()
      .then(coffeeshops => coffeeshops.find(coffeeshop => coffeeshop.id === id));
  }*/

  getCoffeeshop(id: number): Promise<Coffeeshop> {
    const url = `${this.coffeeshopsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Coffeeshop);
  }

}
