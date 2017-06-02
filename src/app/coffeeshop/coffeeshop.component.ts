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
  val: string;

  constructor (private coffeeshopService: CoffeeshopService) {}

  ngOnInit() { this.getCoffeeshops(); }

  getCoffeeshops(): void {
    this.coffeeshopService
      .getCoffeeshops()
      .then(val => this.val = val);
  }

}
