import { Component, OnInit, HostListener, ElementRef  } from '@angular/core';
import { EmployeeService } from '../../services/employee';
import { Employee } from '../../interfaces/employee.interfaces';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { Common } from '../../../../Common';

@Component({
    selector: 'app-employee-details',
    templateUrl: './employee-details.component.html',
    styleUrls: ['./employee-details.component.scss'],
    // changeDetection: ChangeDetectionStrategy.OnPush
})


export class EmployeeDetailsComponent implements OnInit {
    public employeeDetail: Employee;
    allFactors: any = [];
    isSubmitted = false;
    public updatedEmployee: Employee;   
    CreateForm: FormGroup;
    constructor(private employeeService: EmployeeService,        
        private router: Router,
        public commonService: Common,
        private formBuilder: FormBuilder
      ) {
             
        
    }
   
    successMessage = '';
    private Success = new Subject<string>();
    errorMessage = '';

    public ngOnInit() {
        this.CreateForm = new FormGroup({
            userId: new FormControl(''),
            name: new FormControl(''),
            activationstatus: new FormControl(''),
            birthdate: new FormControl('')
        });
        this.employeeService.empDetailSubject$.subscribe(response => {
            this.employeeDetail = response;
            if (response != null) {
              //  console.log('getValue will get the next value:', this.employeeService.empDetailSubject$.getValue());
               
               response.forEach(e => {
                    this.CreateForm.controls['userId'].setValue(e.userId);
                    this.CreateForm.controls['name'].setValue(e.name);
                    this.CreateForm.controls['activationstatus'].setValue(e.activationstatus);
                    this.CreateForm.controls['birthdate'].setValue(e.birthdate);
                });
              
            }
            });

       
    }
    
    editApplication() {
        alert('Hi');
        console.log(this.CreateForm.value);
       
    }
    onSubmit() {
       
        console.log(this.CreateForm.value);
        // stop here if form is invalid
        if (this.CreateForm.invalid) {
            return;
        }

        alert('SUCCESS!! :-)')
    }

    onClickSubmit(data) {
        alert("Entered name : " + data.name);
       // this.employee = this.employeeDetail;
        const employeeUpdated: any = {
            name: data.name,
            userId: data.userId,
            activationstatus: data.activationstatus,
            birthdate: data.birthdate
        }
       
        this.employeeService.saveEmployeeDetails(employeeUpdated);
    }
    // *** To destroy the form values after creation of Application *** //
    destroyFormValues() {
        this.commonService.destroyform();
    }

}
