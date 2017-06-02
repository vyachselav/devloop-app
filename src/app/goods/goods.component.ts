import { Component, OnInit } from '@angular/core';
import { Good } from '../good';
import { GoodService } from '../good.service';

@Component({
  selector: 'dev-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css'],
  providers: [GoodService]
})
export class GoodsComponent implements OnInit {
  goods: Good[];
  neededGoods: Good[];
  type: string;

  constructor(private goodService: GoodService) { this.type = 'torchere'; }

  ngOnInit() {
    this.getGoods();
    // this.getFilteredGoodByType();
  }

  filterChanged(selectedValue: string) {
    this.type = selectedValue;
  }

/*   getFilteredGoodByType(): void {
   for (let entry of this.goods) {
      if (entry.type === this.type) {
        this.neededGoods.push(entry);
      }
    }

  }*/

getGoods(): void {
  this.goodService
  .getGoods()
  .then(goods => this.goods = goods);
}

}
