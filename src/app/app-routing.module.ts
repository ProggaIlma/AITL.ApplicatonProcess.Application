import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SucessComponent} from './main/employee/sucess/sucess.component';
import {AddEmployeeComponent} from './main/employee/add-employee/add-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [
    AddEmployeeComponent, SucessComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'employee', component: AddEmployeeComponent },
      { path: 'success', component: SucessComponent },
      { path: '**', redirectTo: 'AddEmployeeComponent' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule { }
