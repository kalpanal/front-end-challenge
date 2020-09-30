import { Component, OnInit, HostListener, ElementRef  } from '@angular/core';
import { EmployeeService } from '../../services/employee';
import { Employee } from '../../interfaces/employee.interfaces';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { Common } from '../../../../Common';
import { debounceTime } from 'rxjs/operators';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'app-employee-details',
    templateUrl: './employee-details.component.html',
    styleUrls: ['./employee-details.component.scss'],
    animations: [
        trigger('fadeInOut', [
            state('void', style({
                opacity: 0
            })),
            transition('void <=> *', animate(1000)),
        ]),
    ]
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
    activeFlag: boolean;
    inactiveFlag: boolean;
    activeFlagTemplate = '';

    public ngOnInit() {
        this.CreateForm = new FormGroup({
            id: new FormControl(''),
            name: new FormControl(''),
            active: new FormControl(),
            inactive: new FormControl(),
            dateOfBirth: new FormControl('')
        });

        // *** Success message on edit of application *** //
        this.Success.subscribe((message) => this.successMessage =
            message);
        this.Success.pipe(
            debounceTime(2000)
        ).subscribe(() => this.successMessage = null);
        this.employeeService.empDetailSubject$.subscribe(response => {
            this.employeeDetail = response;
            if (response != null) {
               console.log('getValue will get the next value:', this.employeeService.empDetailSubject$.getValue());
               
                response.forEach(e => {
                    this.CreateForm.controls['id'].setValue(e.id);
                    this.CreateForm.controls['name'].setValue(e.name);
                    if (e.active) {
                        this.activeFlag = true;
                        this.inactiveFlag = false;
                    } else {
                        this.activeFlag = false;
                        this.inactiveFlag = true;
                    }
                   this.CreateForm.controls['dateOfBirth'].setValue(e.dateOfBirth);
                });
              
            }
        });

        this.destroyFormValues();
       
    }
    // ** Radio button functionality ** //
    radioChange(target, name) {       
        if (name === 'active' && target.checked) {
            console.log('radio change');
            this.activeFlag = true;
            this.inactiveFlag = false;
        } 
        if (name === 'inactive' && target.checked) {
            console.log('radio change');
            this.activeFlag = false;
            this.inactiveFlag = true;
        } 
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
       // this.employee = this.employeeDetail;
        var updatedEmployee = {} as Employee
        updatedEmployee.id = data.id;
        updatedEmployee.name = data.name;
        if (this.activeFlag) {
            updatedEmployee.active = true;
        } else if (this.inactiveFlag){
            updatedEmployee.active = false;
        }
        updatedEmployee.dateOfBirth = data.dateOfBirth;           
        this.employeeService.saveEmployeeDetails(updatedEmployee).subscribe((data: any) => {
            this.Success.next(this.commonService.globalSuccessMsg);
            this.commonService.windowscroll();
            this.router.navigate(['/employee-portal']);
            setTimeout(() => {
                this.router.navigate(['/employee-portal']);
            }, 1000);
        }, (error) => {
            this.errorMessage = this.commonService.globalErrorMsg;
        });
     }
    // *** To destroy the form values after creation of Application *** //
    destroyFormValues() {
        this.commonService.destroyform();
    }

}
