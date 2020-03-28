import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { element } from 'protractor';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm: string;
produits;
  constructor(private data : DataService) { }

  ngOnInit() {
     this.produits = this.data.produits;
  }
}
