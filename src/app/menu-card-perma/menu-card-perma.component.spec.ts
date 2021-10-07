import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCardPermaComponent } from './menu-card-perma.component';

describe('MenuCardPermaComponent', () => {
  let component: MenuCardPermaComponent;
  let fixture: ComponentFixture<MenuCardPermaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuCardPermaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCardPermaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
