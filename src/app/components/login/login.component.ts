import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {GlobalService} from "../../global.service";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {SectionContainerComponent} from "../../shared/section-container/section-container.component";
import {NgxIntlTelInputModule} from "ngx-intl-tel-input";
import {CountryISO} from "ngx-intl-tel-input";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    RouterLink,
    MatCheckboxModule,
    SectionContainerComponent,
    NgxIntlTelInputModule
  ],
  standalone: true
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup ;
  protected readonly CountryISO = CountryISO;

  constructor(private router: Router , private fb: FormBuilder, private globalService:GlobalService) {
    this.loginForm = fb.group({

      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      phone: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      agreement: [false, Validators.requiredTrue]
    });
  }
  ngOnInit() {
    const formData = sessionStorage.getItem('loginForm');
    if (formData) {
      this.loginForm.patchValue(JSON.parse(formData));
    }
  }

  login() {
    console.log(this.loginForm.value)
    sessionStorage.setItem('loginForm', JSON.stringify(this.loginForm.value));

   this.router.navigate(['/business']);
  }
}
