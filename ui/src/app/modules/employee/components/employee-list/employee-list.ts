import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Employee } from '../../interfaces/employee';
import { EmployeeService } from '../../services/employee';
import { EmployeeDetailsComponent } from '../employee-details/employee-details';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.html',
    styleUrls: ['./employee-list.scss']
})
export class EmployeeListComponent implements AfterViewInit {
    name: string;
    @Input() public empListData: Employee[];
    public data: any[];
    displayedColumns = ['edit', 'id', 'name', 'active', 'dateOfBirth'];
    dataSource: MatTableDataSource<Employee>;

    constructor(private employeeService: EmployeeService,
        private router: Router, public dialog: MatDialog,
        public datePipe: DatePipe) {

    }
    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngOnInit() {
        this.dataSource = new MatTableDataSource(this.empListData);
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.filterPredicate =
            (data, filter: string) => !filter || data.name === filter;
    }

    onEdit(employee: Employee) {
        const dialogConfig = new MatDialogConfig();
        const birthDate = this.datePipe.transform(employee.dateOfBirth, 'MM-dd-yyyy');
        dialogConfig.data = {
            id: employee.id, name: employee.name, active: employee.active, dateOfBirth: birthDate
        };

        const dialogRef = this.dialog.open(EmployeeDetailsComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(
            data => {
                console.log("Dialog output:", data)
               // employee.id = data.id;
                employee.name = data.name;
                employee.active = data.active;
                this.empListData.push(employee);

            }
        );

    }
}

@Pipe({
    name: 'customDateFormat',
})
export class customDateFormatPipe implements PipeTransform {
    transform(value: string) {
        var datePipe = new DatePipe("en-US");
        value = datePipe.transform(value, 'dd-mm-yyyy');
        return value;
    }
}

