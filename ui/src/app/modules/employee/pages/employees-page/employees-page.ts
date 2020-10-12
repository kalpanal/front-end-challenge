import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee';
import { Employee } from '../../interfaces/employee';

@Component({
    selector: 'app-employees-page',
    templateUrl: './employees-page.html',
    styleUrls: ['./employees-page.scss']
})
export class EmployeesPageComponent implements OnInit {
    public empList: Employee[];

    constructor(private employeeService: EmployeeService) { }

    public ngOnInit() {
        this.employeeService.getEmployeeList().subscribe(data => {
            this.empList = data;
        });


    }
}
