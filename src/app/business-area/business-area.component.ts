import {AfterViewInit, Component, DoCheck, OnInit} from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';
import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {path} from "../globals";
import {Business, IBusiness} from "../Business";
import {IEntrepreneur} from "../Entrepreneur";


@Component({
  selector: 'app-business-area',
  templateUrl: './business-area.component.html',
  styleUrls: ['./business-area.component.scss']
})
export class BusinessAreaComponent implements OnInit, DoCheck {

  businessFormData = new FormData()
  business: IBusiness | null = null;
  entrepreneur: IEntrepreneur | null = null;
  entrepreneurIsInitialized = false;
  creatingBusiness = false;


  constructor(public auth: AuthService, private route: ActivatedRoute, private http: HttpClient) {
  }


  ngOnInit(): void {
    this.authUserToEntrepreneur()
  }

  ngDoCheck(): void {
    if (this.entrepreneurIsInitialized) {
      this.getBusinessesOfUser();
    }
  }

  authUserToEntrepreneur() {
    return this.auth.user$.subscribe(
      (profile) => (this.entrepreneur = JSON.parse(JSON.stringify(profile)), this.entrepreneurIsInitialized = true),
    );
  }

  getBusinessesOfUser() {
    this.entrepreneurIsInitialized = false;

    const url = path + '/search/mail/' + this.entrepreneur?.email;
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    this.http.get<IBusiness>(url, {headers}).subscribe({
      next: (b) => {
        this.business = b
      },
      error: (err) => {
        console.error('Error', err);
      }
    });
  }

  switchCreatingBusinessMode(){
    this.creatingBusiness = !this.creatingBusiness
  }
  createBusiness() {
    //this.http.put<Business>(path + '/create/business', JSON.stringify(this.entrepreneur)).subscribe(data => {
    //})
  }
}
