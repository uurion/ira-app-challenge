import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ira-beneficiaries',
  templateUrl: './beneficiaries.component.html',
  styleUrls: ['./beneficiaries.component.scss']
})
export class BeneficiariesComponent implements OnInit {

  @Output() validity = new EventEmitter<boolean>(false);

  relationshipTypes = [
    { name: 'Trust', id: 1 },
    { name: 'LLC', id: 2 },
    { name: 'Partnership', id: 3 }
  ];

  idTypes = [
    { name: 'SSN', id: 1 },
    { name: 'Tax ID', id: 2 }
  ];

  constructor(private fb: FormBuilder) { }

  beneficiariesForm = this.fb.group({
    contingent: [false],
    primary: this.fb.array([
      this.buildBeneficiaryFormGroup()
    ])
  })

  private buildBeneficiaryFormGroup() : FormGroup {
    return this.fb.group({
      fullName: this.fb.control('', Validators.required),
      birthDate: this.fb.control(''),
      idType: this.fb.control(''),
      idValue: this.fb.control(''),
      relationshipType: this.fb.control(''),
      ownershipValue: this.fb.control('')
    });
  }

  ngOnInit(): void {
    this.beneficiariesForm.valueChanges.subscribe(() => {
      this.validity.emit(this.isTotalOwnershipValid);
    })
  }

  get beneficiaries() {
    return this.beneficiariesForm.get('primary') as FormArray;
  }

  get totalOwnershipValue() {
    return this.beneficiaries.value.reduce((acc, x) => acc + x.ownershipValue, 0.0);
  }

  get isTotalOwnershipValid() {
    return this.totalOwnershipValue === 100;
  }

  addBeneficiary() {
    this.beneficiaries.push(this.buildBeneficiaryFormGroup());
  }

  removeBeneficiary(i: number) {
    this.beneficiaries.removeAt(i);
  }
}
