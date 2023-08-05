import { Component } from '@angular/core';
import {CommonModule, NgForOf} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {Router, RouterLink} from "@angular/router";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {InputComponent} from "../../shared/input/input.component";
import {GlobalService} from "../../global.service";
import {SectionContainerComponent} from "../../shared/section-container/section-container.component";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {VerifyAccountComponent} from "../../dialogs/verify-account/verify-account.component";

@Component({
  selector: 'app-business-inform',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatButtonModule,
    RouterLink,
    MatCheckboxModule,
    InputComponent, SectionContainerComponent, MatButtonToggleModule, MatSelectModule, NgForOf, MatRadioModule ,  MatDialogModule],
  templateUrl: './business-inform.component.html',
  styleUrls: ['./business-inform.component.scss']
})
export class BusinessInformComponent {
  businessForm: FormGroup;
  governorates = [ 'Cairo' , 'Giza' , 'Aswan']
  categories = [ 'salon' , 'gym' , 'spa' , 'clinic'];
  socialMedia =  ['linkedin' , 'indeed' , 'google' , 'facebook' , 'twitter' , 'instagram' , 'other']



  constructor(private router: Router , private fb: FormBuilder, private dialog: MatDialog) {
    this.businessForm = fb.group({

      businessType: ['', Validators.required],
      businessCategory: ['', Validators.required],
      governorate: ['', Validators.required],
      district: ['', Validators.required],
      social: ['', Validators.required],
      isUsingSystem: ['', Validators.required]
    });
  }
  ngOnInit() {

  }
  createAccount() {
    this.dialog.open(VerifyAccountComponent, {
      width: '400px',
      hasBackdrop: true,
      panelClass: 'verify-account-dialog'
    })
  }

  }
