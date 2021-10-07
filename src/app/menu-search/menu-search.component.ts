import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Business } from '../Business';
import { Menu } from '../Menu';
import { Food } from '../Food';




@Component({
  selector: 'app-menu-search',
  templateUrl: './menu-search.component.html',
  styleUrls: ['./menu-search.component.scss']
})
export class MenuSearchComponent implements OnInit {


  businesses: Array<Business> = [];
  menuCard: Menu = new Menu("1212", [new Food("TEST",2, "testdiscription", "FOOD")], "owner");

  selectedBusiness: Business | null = null;
  businessIsSelected = false;
  menuCardIsLoaded = false;

  // request settings
  path = 'http://localhost:8080/'

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
  }

  updateBusinesses(bs: Business[]) {
    this.businesses = bs
  }
  async getMenuCard() {
    const url = this.path + this.selectedBusiness?.name + '/mcard'
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    this.http.get<Menu>(url, { headers }).subscribe({
      next: (menu) => {
        this.menuCard = menu
      },
      error: (err) => {
        console.error('Error', err);
      }
    });

  }

  loadMenuCard() {
    this.getMenuCard().then(
      () => {
        this.menuCardIsLoaded = true;
      }
    );
  }

  updateSelectedBusiness(b: Business) {
    this.selectedBusiness = b;
    this.businessIsSelected = true;
    this.loadMenuCard();
  }
  resetState() {
    this.businessIsSelected = false;
    this.menuCard =  new Menu("1212", [new Food("TEST",2, "testdiscription", "FOOD")], "owner");
    this.selectedBusiness = null;
    this.businessIsSelected = false;
    this.menuCardIsLoaded = false;
  }
}
