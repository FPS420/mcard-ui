import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Business } from '../Business';

@Component({
    selector: 'app-business-card',
    templateUrl: './business-card.component.html',
    styleUrls: ['./business-card.component.scss']
})
export class BusinessCardComponent {

    @Input() business: Business | null = null;
    @Input() selected = false;
  

    @Output() selectBusinessEvent = new EventEmitter<string>();
    @Output() businessIsSelectedEvent = new EventEmitter<boolean>();

    selectBusiness(value: string) {
        this.selectBusinessEvent.emit(value);
        this.businessIsSelectedEvent.emit(true);
      }
}