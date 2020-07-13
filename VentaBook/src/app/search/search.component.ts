import { Component, OnInit } from '@angular/core';
import {productos} from '../productos';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  productos=productos;
  constructor() { }
  filtroLibro='';

  ngOnInit(): void {
  }

}
