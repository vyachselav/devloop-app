import { Component, Input } from '@angular/core';

import { Good } from '../good';

@Component({
  selector: 'dev-good-detail',
  templateUrl: './good-detail.component.html',
  styleUrls: ['./good-detail.component.css']
})
export class GoodDetailComponent {
  @Input() good: Good;
}
