import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeModule } from './modules/employee/employee.module';
import { Common } from './Common';
import { DatePipe } from '@angular/common';

import { AppMaterialModules } from './material';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        EmployeeModule,
        AppMaterialModules
    ], providers: [
        Common,
        DatePipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
