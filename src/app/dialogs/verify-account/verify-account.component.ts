import {Component, Inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {NgOtpInputModule} from "ng-otp-input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {Router} from "@angular/router";

@Component({
  selector: 'app-verify-account',
  standalone: true,
  imports: [CommonModule, NgOtpInputModule, ReactiveFormsModule, MatButtonModule, MatDialogModule],
  templateUrl: './verify-account.component.html',
  styleUrls: ['./verify-account.component.scss']
})
export class VerifyAccountComponent implements OnInit {
  countdown = 60;
  otpCode = ''
  isTimeOut = false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<VerifyAccountComponent>, private router:Router) {}
  ngOnInit() {
   setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
      } else if(this.countdown === 0) {
        this.isTimeOut = true;
      }
    }, 1000);
  }

  onOtpChange(e: any) {
    console.log(e)
    this.otpCode = e
  }
  verifyAccount() {
    this.router.navigate(['/success']);
    this.dialogRef.close('save');
  }
  resendCode() {
    this.countdown = 60;
    this.isTimeOut = false;
  }
}
