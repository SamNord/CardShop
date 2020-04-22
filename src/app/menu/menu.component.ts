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

  // change = () => {
  //   var elt = document.querySelector("body");
  //   elt.style.backgroundColor = "yellow";
  // }

  show = () => {
    let click = document.getElementById("drop-content");
    if(click.style.display === "none") {
      click.style.display = "block";
    } else {
      click.style.display = "none";
    }
  }
}
