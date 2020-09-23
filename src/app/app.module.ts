import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { WizardStepsComponent } from './wizard-steps/wizard-steps.component';
import { WizardScreenComponent } from './wizard-screen/wizard-screen.component';
import { BeneficiariesComponent } from './wizard-screen/beneficiaries/beneficiaries.component';
import { TotalOwnershipComponent } from './wizard-screen/beneficiaries/total-ownership/total-ownership.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarTopComponent,
    WizardStepsComponent,
    WizardScreenComponent,
    BeneficiariesComponent,
    TotalOwnershipComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
