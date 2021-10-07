import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Output, Input, EventEmitter, DoCheck } from '@angular/core';
import { Business } from '../Business';

@Component({
  selector: 'app-menu-search-bar',
  templateUrl: './menu-search-bar.component.html',
  styleUrls: ['./menu-search-bar.component.scss']
})
export class MenuSearchBarComponent implements OnInit, DoCheck {

  constructor(private http: HttpClient) { }

  
  searchterm = 'laamigo'
  businesses: Array<Business> = [];
  path = 'http://localhost:8080/'


  @Output() compareBusinessesEvent = new EventEmitter<Business[]>();
  @Output() searchEvent = new EventEmitter();



  compareBusinesses(business: Business[]) {
    this.compareBusinessesEvent.emit(business);
  }
  ngDoCheck(): void {
    this.compareBusinesses(this.businesses);
  }

  ngOnInit(): void {
  }

  searchBusinesses() {
    this.getBusinesses();
    this.searchEvent.emit();
  }

  async getBusinesses() {
    const url = this.path + 'search/' + this.searchterm;
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


}
