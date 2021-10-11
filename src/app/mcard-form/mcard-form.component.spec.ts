import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McardFormComponent } from './mcard-form.component';

describe('McardFormComponent', () => {
  let component: McardFormComponent;
  let fixture: ComponentFixture<McardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McardFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
