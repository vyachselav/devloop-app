import { Component, OnInit } from '@angular/core';
import { Coffeeshop } from './coffeeshop';
import { CoffeeshopService } from './coffeeshop.service';

@Component({
  selector: 'dev-coffeeshop',
  templateUrl: './coffeeshop.component.html',
  providers: [ CoffeeshopService ],
  styles: [`.container {
    padding-top: 60px;
  }`]
})
export class CoffeeshopComponent implements OnInit {
  coffeeshops: Coffeeshop[];
  // coffeeshops: string;

  constructor (private coffeeshopService: CoffeeshopService) {}

  ngOnInit() { this.getCoffeeshops(); }

  getCoffeeshops(): void {
    this.coffeeshopService
      .getCoffeeshops()
      .then(coffeeshops => this.coffeeshops = coffeeshops);
  }

}
