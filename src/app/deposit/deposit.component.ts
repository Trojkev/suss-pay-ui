import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { StkDeposit } from '../profile/Model';
import { SharedService } from '../shared/config/shared.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
  focus;
  focus1;
  
  stkDeposit: StkDeposit;

  constructor(
    private sharedService : SharedService,
    private router: Router,
  ) { 
    this.stkDeposit = new StkDeposit();
  }

  ngOnInit() {
    this.sharedService.setPageTitle('Deposit');
  }

  initiateDeposit(){
    this.stkDeposit.msisdn = "254" + this.stkDeposit.msisdn;

    this.sharedService.initiateStkPush(this.stkDeposit).subscribe();

    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'A prompt was sent to ' + this.stkDeposit.msisdn,
      footer: 'Enter pin on your phone to complete the transaction.'
    }).then((result) => {
      if(result.isConfirmed){
        console.log("reloading");
        location.reload();
      }
    })    
  }

}
