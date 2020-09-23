import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ira-total-ownership',
  templateUrl: './total-ownership.component.html',
  styleUrls: ['./total-ownership.component.scss']
})
export class TotalOwnershipComponent implements OnInit {
  
  @Input() totalOwnershipValue: number;
  @Input() isTotalOwnershipValid: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
