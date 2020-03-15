import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-test-owl-caroussel',
  templateUrl: './test-owl-caroussel.component.html',
  styleUrls: ['./test-owl-caroussel.component.css']
})
export class TestOwlCarousselComponent implements OnInit {
produits;
  constructor(private data : DataService) { }

  ngOnInit() {
    this.produits = this.data.produits;
  }

}
