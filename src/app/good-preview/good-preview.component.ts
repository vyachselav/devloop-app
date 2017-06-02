import { Component, OnInit, Input } from '@angular/core';
import { Good } from '../good';
import { GoodService } from '../good.service';

@Component({
  selector: 'dev-good-preview',
  providers: [GoodService],
  templateUrl: './good-preview.component.html',
  styleUrls: ['./good-preview.component.css']
})
export class GoodPreviewComponent implements OnInit {


  @Input() name: number;
  @Input() price: number;
  @Input() info: string;
  @Input() type: string;
  @Input() image: string;

  goods: Good[];

  constructor(private goodService: GoodService) { }

  ngOnInit() {
    this.getGoods();
  }

  getGoods(): void {
    // this.goods = this.goodService.getGoods();
    this.goodService.getGoods().then(goods => this.goods = goods);
  }

}
