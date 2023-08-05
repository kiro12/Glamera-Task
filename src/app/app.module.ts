import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {CanActivateUser} from "./guards/is-user-approved.guard";
@NgModule({
  declarations: [
    AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        FormsModule,
        MatButtonModule,
        MatInputModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [
    CanActivateUser
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
