import {Component, DoCheck, OnInit} from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';
import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {path} from "../globals";
import {IBusiness} from "../Business";
import {IEntrepreneur} from "../Entrepreneur";
import {FormBuilder, FormGroup} from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-business-area',
  templateUrl: './business-area.component.html',
  styleUrls: ['./business-area.component.scss']
})
export class BusinessAreaComponent implements OnInit, DoCheck {

  businessForm: FormGroup;
  business: IBusiness | null = null;
  entrepreneur: IEntrepreneur | null = null;
  entrepreneurIsInitialized = false;
  businessIsInitialized = false;
  creatingBusiness = false;


  constructor(public auth: AuthService, private route: ActivatedRoute, private http: HttpClient, public fb: FormBuilder) {
    this.businessForm = this.fb.group({
      entrepreneur_id: [''],
      business_name: [''],
      street: [''],
      city: [''],
      zip: ['']
    })
  }


  ngOnInit(): void {
    this.authUserToEntrepreneur()
  }

  ngDoCheck(): void {
    if (this.entrepreneurIsInitialized) {
      this.getBusinessesOfUser();
    }
    if (this.businessIsInitialized) {
      this.checkBusinessHasMenuCard();
      this.businessIsInitialized = false;
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
        this.businessIsInitialized = true;
      },
      error: (err) => {
        console.error('Error', err);
      }
    });
  }

  switchCreatingBusinessMode() {
    this.creatingBusiness = !this.creatingBusiness
  }

  checkBusinessHasMenuCard(): boolean {
    return this.business?.menu_ids.length != 0
  }

  createBusiness() {
    var formData: any = new FormData();
    formData.append("entrepreneur_id", this.businessForm.get('entrepreneur_id')?.value);
    formData.append("business_name", this.businessForm.get('business_name')?.value);
    formData.append("street", this.businessForm.get('street')?.value);
    formData.append("city", this.businessForm.get('city')?.value);
    formData.append("zip", this.businessForm.get('zip')?.value);
    this.http.post(path + 'create/business', formData).subscribe(
      (response) => (console.log(response), alert('Geschäft erfolgreich erstellt!'), this.refresh()),
      (error) => console.log(error)
    )
  }

  refresh() {
    window.location.reload();
  }
}
