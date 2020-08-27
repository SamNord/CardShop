import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivationEnd, ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  products;
  title = 'angularowlslider';

  constructor(private data: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.products = this.data.produits;

  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: true,
    autoplayTimeout: 1520,
    smartSpeed: 1500,
    animateIn: 'linear',
    animateOut: 'linear',
    dots: true,
    stagePadding: 10,
    lazyLoad: true,
    margin: 20,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
        margin: 20,
        nav: true,
        navSpeed: 100
      },
      400: {
        items: 1,
        margin: 20,
        nav: true,
        navSpeed: 100
      },
      740: {
        items: 2,
        margin: 20
      },
      940: {
        items: 3,
        margin: 20
      }
    },
    nav: true

  }
}
