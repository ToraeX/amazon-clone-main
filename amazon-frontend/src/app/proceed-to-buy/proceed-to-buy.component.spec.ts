import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceedToBuyComponent } from './proceed-to-buy.component';

describe('ProceedToBuyComponent', () => {
  let component: ProceedToBuyComponent;
  let fixture: ComponentFixture<ProceedToBuyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProceedToBuyComponent]
    });
    fixture = TestBed.createComponent(ProceedToBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
