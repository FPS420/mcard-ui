import {Component, Inject} from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';
import {DOCUMENT} from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {Entrepreneur} from "../Entrepreneur";
import {path} from "../globals";


@Component({
  selector: 'app-auth-button',
  template: `
    <ng-container *ngIf="auth.isAuthenticated$ | async; else loggedOut">
      <button type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark"
              (click)="auth.logout({ returnTo: document.location.origin })">
        Log out
      </button>
    </ng-container>

    <ng-template #loggedOut>
      <button type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark"
              (click)="auth.loginWithRedirect()">Log in
      </button>
    </ng-template>
  `,
  styles: [],
})
export class AuthButtonComponent {
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService, public http: HttpClient) {
  }
}
