import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeesPageComponent } from './pages/employees-page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppMaterialModules } from '../../material';

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
        BrowserAnimationsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatToolbarModule,
        AppMaterialModules
    ],
    exports: [
        CommonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatToolbarModule
    ],
}
)
export class EmployeeModule { }
