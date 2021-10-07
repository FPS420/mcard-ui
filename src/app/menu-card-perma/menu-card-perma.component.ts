import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Menu} from "../Menu";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {path} from "../globals";

@Component({
  selector: 'app-menu-card-perma',
  templateUrl: './menu-card-perma.component.html',
  styleUrls: ['./menu-card-perma.component.scss']
})
export class MenuCardPermaComponent implements OnInit {

  menu: Menu | undefined;
  menuIsLoaded = false;



  constructor(private route: ActivatedRoute, private http: HttpClient) {
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const menu_id = String(routeParams.get('menuId'));
    this.loadMenuCard(menu_id);
  }


  loadMenuCard(menu_id: string) {
    this.getMenuCard(menu_id).then(() => {
        this.menuIsLoaded = true;
    })
  }

  async getMenuCard(menu_id: string) {
    const url = path + '/mcard/' + menu_id
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    this.http.get<Menu>(url, {headers}).subscribe({
      next: (menu) => {
        this.menu = menu
      },
      error: (err) => {
        console.error('Error', err);
      }
    });

  }
}

