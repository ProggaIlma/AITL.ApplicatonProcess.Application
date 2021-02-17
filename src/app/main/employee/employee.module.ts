import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AddEmployeeComponent} from './add-employee/add-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { SucessComponent } from './sucess/sucess.component';
@NgModule({
  declarations: [],
  exports: [

  ],
  imports: [
    RouterModule.forChild([

    ]),
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    CommonModule,
    MatIconModule
  ]
})
export class EmployeeModule {
}
