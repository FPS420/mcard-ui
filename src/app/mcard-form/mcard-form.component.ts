import {Component, Input, OnInit} from '@angular/core';
import {IBusiness} from "../Business";

@Component({
  selector: 'app-mcard-form',
  templateUrl: './mcard-form.component.html',
  styleUrls: ['./mcard-form.component.scss']
})
export class McardFormComponent implements OnInit {

  constructor() {
  }

  @Input() business: IBusiness | null = null

  ngOnInit(): void {
  }

}
