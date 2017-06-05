import {AfterViewInit, Component, OnInit} from '@angular/core';
import { Coffeeshop } from './coffeeshop';
import { CoffeeshopService } from './coffeeshop.service';
import {AgmMap, AgmMarker} from '@agm/core';

@Component({
  selector: 'dev-coffeeshop',
  templateUrl: './coffeeshop.component.html',
  providers: [ CoffeeshopService ],
  styles: [`.main-wrapper {
    padding-top: 60px;
  }
  agm-map {
     height: 500px;
   }
  img {
    width:100px;
    height:100px;
  }
  li {
    margin:10px;
  }
  h4 {
    display: inline-block;
    margin:10px;
    cursor: pointer;
  }
  ul {
    margin: 20px 0;
  }
  hr {background-color: dodgerblue; height:5px;}
  .empty {color: #f00;}
  .Opened *{display: block;}
  .Closed *{display: none;}
  .rootTitle {background-color:#666;}`]
})
export class CoffeeshopComponent implements OnInit {
  coffeeshops: Coffeeshop[];
  mainUrl = 'http://coffee-points.net/';
  lat = 49.440394122695;
  lng = 26.996154785156;
  zoom = 16;

  constructor (private coffeeshopService: CoffeeshopService) { }

  ngOnInit() { this.getCoffeeshops(); }

  getCoffeeshops(): void {
    this.coffeeshopService
      .getCoffeeshops()
      .then(coffeeshops => this.coffeeshops = coffeeshops);
  }

  toggleCoffeeshop(id: number) {
    document.getElementById(id.toString()).classList.toggle('Closed');
  }

  toggleAll() {
    let uls = document.querySelectorAll('h4 + ul');
    for (let key in uls) {
      uls[key].classList.toggle('Closed');
      }
    }
}
