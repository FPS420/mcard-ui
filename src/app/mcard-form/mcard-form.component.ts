import {Component, OnInit} from '@angular/core';
import {IBusiness} from "../Business";
import {ActivatedRoute} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {path} from "../globals";
import {Menu} from "../Menu";

@Component({
  selector: 'app-mcard-form',
  templateUrl: './mcard-form.component.html',
  styleUrls: ['./mcard-form.component.scss']
})
export class McardFormComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient) {
  }

  business: IBusiness | null = null
  businessIsUpdated = false;

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const businessName = String(routeParams.get('businessName'));
    this.getBusiness(businessName).then(() => {
      this.businessIsUpdated = true;
    });
  }

  async getBusiness(businessName: string) {
    const url = path + '/search/' + businessName
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
}
