import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeesPageComponent } from './pages/employees-page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
    EmployeeListComponent,
    EmployeeDetailsComponent
} from './components';

@NgModule({
    declarations: [
        EmployeesPageComponent,
        EmployeeListComponent,
        EmployeeDetailsComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        EmployeeRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        BrowserAnimationsModule
    ]
})
export class EmployeeModule { }
