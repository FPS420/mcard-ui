import { Component, Input, OnInit } from '@angular/core';
import { Menu } from '../Menu';
import { Food } from '../Food';
@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss']
})
export class MenuCardComponent implements OnInit {

  constructor() { }

  @Input() menuCard: Menu = new Menu("_ID", [new Food("TEST",2, "testdiscription", "FOOD")], "owner");
  ngOnInit(): void {
  }

}
