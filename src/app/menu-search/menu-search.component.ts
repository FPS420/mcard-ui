import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { AuthService } from '@auth0/auth0-angular';
import {IBusiness} from '../Business';
import {IMenu} from '../Menu';
import {path} from "../globals";

@Component({
  selector: 'app-menu-search',
  templateUrl: './menu-search.component.html',
  styleUrls: ['./menu-search.component.scss']
})
export class MenuSearchComponent implements OnInit {
  businesses: Array<IBusiness> = [];
  menuCard: IMenu | null = null;

  selectedBusiness: IBusiness | null = null;
  businessIsSelected = false;
  menuCardIsLoaded = false;


  constructor(private http: HttpClient) {
  }


  ngOnInit(): void {
  }

  updateBusinesses(bs: IBusiness[]) {
    this.businesses = bs
  }

  async getMenuCard() {
    // @ts-ignore
    const menuId = this.selectedBusiness?.menu_ids[0];
    const url = path + 'mcard/'+ menuId;
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    this.http.get<IMenu>(url, {headers}).subscribe({
      next: (menu) => {
        this.menuCard = menu
      },
      error: (err) => {
        console.error('Error', err);
      }
    });

  }

  async getBusinessById() {
    const url = path + "/search/id/" + this.selectedBusiness?._id
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    this.http.get<IBusiness>(url, {headers}).subscribe({
      next: (b) => {
        this.selectedBusiness = b
      },
      error: (err) => {
        console.error('Error', err);
      }
    });
  }

  loadMenuCard() {
    this.getBusinessById().then(() => {
      this.getMenuCard().then(
        () => {
          this.menuCardIsLoaded = true;
        }
      )
    });
  }

  updateSelectedBusiness(b: IBusiness) {
    this.selectedBusiness = b;
    this.businessIsSelected = true;
    this.loadMenuCard();
  }

  resetState() {
    this.businessIsSelected = false;
    this.menuCard = null;
    this.selectedBusiness = null;
    this.menuCardIsLoaded = false;
  }
}
