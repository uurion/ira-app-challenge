import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'ira-beneficiaries',
  templateUrl: './beneficiaries.component.html',
  styleUrls: ['./beneficiaries.component.scss']
})
export class BeneficiariesComponent implements OnInit {

  @Output() validity = new EventEmitter<boolean>(false);

  beneficiariesForm = this.fb.group({
    contingent: [false],
    primary: this.fb.array([
      this.fb.group({
        fullName: this.fb.control(''),
        birthDate: this.fb.control(''),
        idType: this.fb.control(''),
        idValue: this.fb.control(''),
        relationshipType: this.fb.control(''),
        ownershipValue: this.fb.control('')
      })
    ])
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.beneficiariesForm.valueChanges.subscribe(() => {
      this.validity.emit(this.isTotalOwnershipValid);
    })
  }

  get beneficiaries() {
    return this.beneficiariesForm.get('primary') as FormArray;
  }

  get totalOwnership() {
    return this.beneficiaries.value.reduce((acc, x) => acc + x.ownershipValue, 0.0);
  }

  get isTotalOwnershipValid() {
    return this.totalOwnership === 100;
  }

  addBeneficiary() {
    this.beneficiaries.push(this.fb.group({
      fullName: this.fb.control(''),
      birthDate: this.fb.control(''),
      idType: this.fb.control(''),
      idValue: this.fb.control(''),
      relationshipType: this.fb.control(''),
      ownershipValue: this.fb.control('')
    }));
  }

  removeBeneficiary(i: number) {
    this.beneficiaries.removeAt(i);
  }

  onSubmit() {
    console.log(this.beneficiariesForm.value);
  }

}
