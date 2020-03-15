import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  products;
  constructor(private data : DataService) { }

  ngOnInit() {
    this.products = this.data.produits;
  }

  GetSliders = (isFirst, isLast, isEven, isOdd) => {
    return {
      active : isFirst,
      lastActive : isLast,
      even : isEven,
      odd : isOdd
    };
  }

}
