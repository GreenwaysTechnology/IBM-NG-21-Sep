import { Component, OnInit } from '@angular/core';
import { Address } from '../types/address.type';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styles: [
  ]
})
export class InterpolationComponent implements OnInit {

  //state /models/data
  firstName: string = "Subramanian"
  lastName: string = "Murugan";
  salary: number = 1000;
  status: boolean = true

  //object
  address: Address = {
    city: 'Coimbatore'
  }
  //arrays
  skills: Array<string> = ["Java", "Angular", "Cloud", "Devops"]

  constructor() { }

  ngOnInit(): void {
  }

}
