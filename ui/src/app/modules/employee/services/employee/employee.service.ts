import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../../interfaces/employee.interfaces';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    public get empDetailSubject$() {
        return this._empDetailSubject$;
    }
    private _empDetailSubject$ = new BehaviorSubject(null);
    private apiURL: string;

    constructor(private http: HttpClient) {
        this.apiURL = 'http://localhost:8080/challenge/api/v1/';
    }

    public getEmployeeList() {
        return this.http.get<Employee[]>(this.apiURL + 'findAllUsers');
    }

    public getEmployeeDetails(employee) {
        const data = this.http.get<Employee>(this.apiURL + 'findByUserId', { params: { userId: employee.userId } });
        
        this._empDetailSubject$.next(data);
    }

    public saveEmployeeDetails(enroleeData) {
        console.log('enroleeData' + this.apiURL + 'updateByUserId' + JSON.stringify(enroleeData));
        return this.http.post(this.apiURL + 'updateByUserId', JSON.stringify(enroleeData));
    }

}
