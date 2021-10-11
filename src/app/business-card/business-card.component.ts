import { Component, Input, Output, EventEmitter } from '@angular/core';

import { IBusiness } from '../Business';

@Component({
    selector: 'app-business-card',
    templateUrl: './business-card.component.html',
    styleUrls: ['./business-card.component.scss']
})
export class BusinessCardComponent {

    @Input() business: IBusiness | null = null;
    @Input() selected = false;


    @Output() selectBusinessEvent = new EventEmitter<IBusiness>();
    @Output() businessIsSelectedEvent = new EventEmitter<boolean>();



    selectBusiness(b: IBusiness){
        this.selectBusinessEvent.emit(b);
        this.businessIsSelectedEvent.emit(true);
    }

}
