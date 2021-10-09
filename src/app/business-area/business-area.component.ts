import {Component, OnInit} from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';
import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {path} from "../globals";
import {Business} from "../Business";


@Component({
  selector: 'app-business-area',
  templateUrl: './business-area.component.html',
  styleUrls: ['./business-area.component.scss']
})
export class BusinessAreaComponent implements OnInit {

  userMail = ''
  business: Business | null = null;
  profileJson: string | null = null;

  constructor(public auth: AuthService, private route: ActivatedRoute, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => (this.profileJson = JSON.stringify(profile, null, 2))
    );
  }

  loadBusinessInformation() {
    this.getBusinessesOfUser(this.userMail).then(
      () => {
      }
    );
  }

  async getBusinessesOfUser(usersmail: string) {
    const url = path + '/search/mail/' + usersmail;
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    this.http.get<Business>(url, {headers}).subscribe({
      next: (b) => {
        this.business = b
      },
      error: (err) => {
        console.error('Error', err);
      }
    });
  }


}
