import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivationEnd } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
products;
title = 'angularowlslider';

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

  customOptions: OwlOptions  = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay : true,
    autoplayTimeout: 1520,
    smartSpeed: 1500,
    animateIn: 'linear',
    animateOut: 'linear',
    dots: true,
     navSpeed: 100,  
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2,
        margin: 30
      },
      740: {
        items: 2,
        margin: 30
      },
      940: {
        items: 3,
        margin: 30
      }
    },
    nav: false
  }
}
