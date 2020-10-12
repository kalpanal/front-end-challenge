import { Component, OnInit, Inject } from '@angular/core';
import { EmployeeService } from '../../services/employee';
import { Employee } from '../../interfaces/employee';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Common } from '../../../../Common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-employee-details',
    templateUrl: './employee-details.html',
    styleUrls: ['./employee-details.scss'] 
})


export class EmployeeDetailsComponent implements OnInit {

    public employeeDetail: Employee;
    allFactors: any = [];
    isSubmitted = false;
    public updatedEmployee: Employee;
    CreateForm: FormGroup;
    id: string;
    name: string;

    constructor(private employeeService: EmployeeService,
        public commonService: Common,
        private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<EmployeeDetailsComponent>,
        @Inject(MAT_DIALOG_DATA) { id, name, active, dateOfBirth }: Employee
    ) {
        this.id = id;
        this.name = name;

        this.CreateForm = formBuilder.group({
            id: [id, Validators.required],
            name: [name, Validators.required],
            active: [active, Validators.required],
            dateOfBirth: [dateOfBirth, Validators.required]
        });
    }

    public ngOnInit() {
        this.dialogRef.updatePosition({
            top: `60px`,
            right: `220px`
        });

    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    save() {
        var updatedEmployee = {} as Employee
        updatedEmployee.id = this.CreateForm.value.id;
        updatedEmployee.name = this.CreateForm.value.name;
        if (this.CreateForm.value.active == 'true') {
            updatedEmployee.active = true;
        } else {
            updatedEmployee.active = false;
        }
        updatedEmployee.dateOfBirth = this.CreateForm.value.dateOfBirth;
        this.employeeService.saveEmployeeDetails(updatedEmployee).subscribe(data => {
            this.CreateForm.reset();
        });

        this.dialogRef.close(this.CreateForm.value);
    }
}
