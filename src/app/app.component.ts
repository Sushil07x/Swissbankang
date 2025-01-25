import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AccountAdminComponent } from "./account/account-admin/account-admin.component";
import { CreateAccountComponent } from "./account/create-account/create-account.component";
import { ViewAccountComponent } from "./account/view-account/view-account.component";
import { LoanAdminComponent } from "./loan/loan-admin/loan-admin.component";
import { ApplyLoanComponent } from "./loan/apply-loan/apply-loan.component";
import { ViewLoanComponent } from "./loan/view-loan/view-loan.component";
import { PayLoanComponent } from "./loan/pay-loan/pay-loan.component";
import { BankAdminComponent } from "./BankAdmin/bank-admin/bank-admin.component";
import { BankRulesComponent } from "./BankAdmin/bank-rules/bank-rules.component";
import { CloseAccountComponent } from "./account/close-account/close-account.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AccountAdminComponent, CreateAccountComponent, ViewAccountComponent, LoanAdminComponent, ApplyLoanComponent, ViewLoanComponent, PayLoanComponent, BankAdminComponent, BankRulesComponent, CloseAccountComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Swissbank';
}
