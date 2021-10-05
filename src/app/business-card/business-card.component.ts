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
  

    @Output() selectBusinessEvent = new EventEmitter<Business>();
    @Output() businessIsSelectedEvent = new EventEmitter<boolean>();
 
   

    selectBusiness(b: Business){
        this.selectBusinessEvent.emit(b);
        this.businessIsSelectedEvent.emit(true);
    }
   
}