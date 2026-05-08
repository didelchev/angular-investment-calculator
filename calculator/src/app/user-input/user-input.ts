import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
})
export class UserInput {


  constructor(private investmentService: InvestmentService){}

  enteredInitialInvestment = '0';
  enteredAnnualInvestemnt = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';


  onSubmit(){
    this.investmentService.calculateInvestmentResults({
      initialInvestment: Number(this.enteredInitialInvestment),
      annualInvestment: Number(this.enteredAnnualInvestemnt),
      expectedReturn: Number(this.enteredExpectedReturn),
      duration: Number(this.enteredDuration)
    })
  }
}
