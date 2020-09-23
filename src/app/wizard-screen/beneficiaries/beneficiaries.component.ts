import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'ira-beneficiaries',
  templateUrl: './beneficiaries.component.html',
  styleUrls: ['./beneficiaries.component.scss']
})
export class BeneficiariesComponent implements OnInit {

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
  name = new FormControl('');

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get beneficiaries() {
    return this.beneficiariesForm.get('primary') as FormArray;
  }

  addBeneficiary() {
    const formArray = this.beneficiaries;
    formArray.push(this.fb.group({
      fullName: this.fb.control(''),
      birthDate: this.fb.control(''),
      idType: this.fb.control(''),
      idValue: this.fb.control(''),
      relationshipType: this.fb.control(''),
      ownershipValue: this.fb.control('')
    }));
  }

  onSubmit() {
    console.log(this.beneficiariesForm.value);
  }

}
