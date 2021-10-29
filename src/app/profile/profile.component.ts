import { Component, Input, OnInit} from '@angular/core';
import {Menu} from "../Menu";
import {IEntrepreneur} from "../Entrepreneur";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  @Input() entrepreneur: IEntrepreneur | null = null;

  constructor() {
  }

  ngOnInit(): void {

  }



}
