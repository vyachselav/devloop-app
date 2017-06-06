import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Coffeeshop } from './coffeeshop';
import { CoffeeshopService } from './coffeeshop.service';

import {AgmMap, AgmMarker} from '@agm/core';

@Component({
  selector: 'dev-coffeeshop',
  templateUrl: './coffeeshop.component.html',
  providers: [ CoffeeshopService ],
  styleUrls: ['./coffeeshop.component.css']
})
export class CoffeeshopComponent implements OnInit {
  coffeeshops: Coffeeshop[];
  lat = 49.440394122695;
  lng = 26.996154785156;
  zoom = 16;

  constructor (
    private coffeeshopService: CoffeeshopService,
    private router: Router) { }

  ngOnInit() { this.getCoffeeshops(); }

  getCoffeeshops(): void {
    this.coffeeshopService
      .getCoffeeshops()
      .then(coffeeshops => this.coffeeshops = coffeeshops);
  }

  gotoDetail(id: number): void {
    this.router.navigate(['/detail', id]);
  }

/*  toggleCoffeeshop(id: number) {
    document.getElementById(id.toString()).classList.toggle('Closed');
  }

  toggleAll() {
    let uls = document.querySelectorAll('h4 + ul');
    for (let key in uls) {
      uls[key].classList.toggle('Closed');
      }
    }*/
}
