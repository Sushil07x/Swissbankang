import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankRulesComponent } from './bank-rules.component';

describe('BankRulesComponent', () => {
  let component: BankRulesComponent;
  let fixture: ComponentFixture<BankRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankRulesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BankRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
