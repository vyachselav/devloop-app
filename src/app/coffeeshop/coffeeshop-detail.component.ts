import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { AgmMap, AgmMarker, AgmInfoWindow } from '@agm/core';

import { Coffeeshop } from './coffeeshop';
import { CoffeeshopService } from './coffeeshop.service';

@Component({
  selector: 'dev-coffeeshop-detail',
  templateUrl: './coffeeshop-detail.component.html',
  styles: [`
    .main-wrapper{padding-top: 60px;}
    img {width:100px; height:100px;}
    agm-map {height: 500px;}
  `]
})

export class CoffeeshopDetailComponent implements OnInit {
  coffeeshop: Coffeeshop;
  mainUrl = 'http://coffee-points.net/';

  constructor(
    private coffeeshopService: CoffeeshopService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.coffeeshopService.getCoffeeshop(+params['id']))
      .subscribe(coffeeshop => this.coffeeshop = coffeeshop);
  }

  goBack(): void {
    this.location.back();
  }
}
