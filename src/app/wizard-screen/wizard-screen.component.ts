import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ira-wizard-screen',
  templateUrl: './wizard-screen.component.html',
  styleUrls: ['./wizard-screen.component.scss']
})
export class WizardScreenComponent implements OnInit {

  isNextStepDisabled = true;

  constructor() { }

  onValidityUpdate(isValid: boolean) {
    this.isNextStepDisabled = !isValid;
  }

  ngOnInit(): void {
  }

}
