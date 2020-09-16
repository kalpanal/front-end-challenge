import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Employee } from '../../interfaces/employee.interfaces';
import { EmployeeService } from '../../services/employee';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.scss'],
    animations: [
        trigger('fadeInOut', [
            state('void', style({
                opacity: 0
            })),
            transition('void <=> *', animate(1000)),
        ]),
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent {
    @Input() public empListData: Employee[];

    constructor(private employeeService: EmployeeService,
        private router: Router) { }

    public showEmployeeDetails(employee) {
        this.employeeService.getEmployeeDetails(employee);
    }

    /*public editEmployeeDetails(Employee) {
        this.router.navigate(['/editEmploeeDetails'],
            { state: { applicationData: Employee } });
        console.log('Modified Data ==> ', Application);
    }*/

}
