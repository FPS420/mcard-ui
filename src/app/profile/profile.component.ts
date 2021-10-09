import { Component, Input, OnInit} from '@angular/core';
import {Menu} from "../Menu";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() profil: string |null=null;
  user = null;
  constructor() {
  }

  ngOnInit(): void {

  }



}
