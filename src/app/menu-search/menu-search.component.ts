import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Business } from '../Business';
import { Food } from '../Food';
import { Menu } from '../Menu';



@Component({
  selector: 'app-menu-search',
  templateUrl: './menu-search.component.html',
  styleUrls: ['./menu-search.component.scss']
})
export class MenuSearchComponent implements OnInit {

  search_term = 'laamigo'
  businesses: Array<Business> = [];
  menuCard: Menu | null = null;

  selectedBusiness: Business | null = null;
  businessIsSelected = false;
  menuCardIsLoaded = false;

  // request settings
  path = 'http://localhost:8080/'

  constructor(private http: HttpClient) { }




  ngOnInit(): void {
  }

  searchBusiness(): void {

    this.resetState();

    const url = this.path + 'search/' + this.search_term;
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');


    this.http.get<Business[]>(url, { headers }).subscribe({
      next: (businesses) => {
        this.businesses = businesses
      },
      error: (err) => {
        console.error('Error', err);
      }
    });
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
    this.menuCard = null;
    this.search_term = 'laamigo';
    this.selectedBusiness = null;
    this.businessIsSelected = false;
    this.menuCardIsLoaded = false;
  }
}
