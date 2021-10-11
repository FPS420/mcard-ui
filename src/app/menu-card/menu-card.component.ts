import { Component, Input, OnInit } from '@angular/core';
import { IMenu } from '../Menu';
import {IBusiness} from "../Business";

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss']
})
export class MenuCardComponent implements OnInit {

  constructor() { }

  @Input() menuCard: IMenu | null= null ;
  ngOnInit(): void {
  }

}
