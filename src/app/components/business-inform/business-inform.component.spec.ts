import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessInformComponent } from './business-inform.component';

describe('BusinessInformComponent', () => {
  let component: BusinessInformComponent;
  let fixture: ComponentFixture<BusinessInformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BusinessInformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessInformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
