import { Component, OnInit } from '@angular/core';
import {Employee} from '../../../model/employee';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ApiService } from '../../../api.service';
import {AtLeastOneFieldValidator} from '../../../shared/at-least-one.directive';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employee: Employee;
  countries: any = [];
  employeeForm: FormGroup;
  spresp: any;
  postdata: Employee;
  constructor(private api: ApiService, private router: Router) {

  }

  ngOnInit(): void {
    this.employee = new Employee();
    this.employeeForm = new FormGroup({
      name: new FormControl(this.employee.Name, [
        Validators.minLength(5),
      ]),
      address: new FormControl(this.employee.Address, [
        Validators.minLength(10)
      ]),
      familyName: new FormControl(this.employee.FamilyName, [
        Validators.minLength(5)
      ]),
      email: new FormControl(this.employee.EMailAdress, [
        Validators.email
      ]),
      country: new FormControl(this.employee.CountryOfOrigin, [
      ]),
      age: new FormControl(this.employee.Age, [
        Validators.min(20),
        Validators.max(60)
      ]),
      hired: new FormControl(this.employee.Hired, [
        Validators.nullValidator
      ])
    }, AtLeastOneFieldValidator);

    this.api.getCountries()
        .subscribe(data => {
        this.countries = data;
        console.log(data);
        });

  }
  // tslint:disable-next-line:typedef
  clickMethod(name: string) {
    if (confirm('Are you sure to reset ' + name)) {
      this.employeeForm.reset();
    }
  }

  // tslint:disable-next-line:typedef
  onSubmit() {

      this.api
        .addEmployee(this.employee)
        .subscribe(resp => {
          console.log(resp);
          if (resp == null) {  Swal.fire('400', 'the object is null'); }
         else {
           Swal.fire('Success');
           this.router.navigate( [ 'success' ] );
         }
        }, () => {
          Swal.fire('Error');
        } );

  }
}
