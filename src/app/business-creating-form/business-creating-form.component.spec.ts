import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessCreatingFormComponent } from './business-creating-form.component';

describe('BusinessCreatingFormComponent', () => {
  let component: BusinessCreatingFormComponent;
  let fixture: ComponentFixture<BusinessCreatingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessCreatingFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessCreatingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
