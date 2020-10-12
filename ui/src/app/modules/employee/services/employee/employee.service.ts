import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../../interfaces/employee';
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
        this.apiURL = environment.apiUrl;
    }

    public getEmployeeList() {
        return this.http.get<Employee[]>(this.apiURL + 'enrollees');
    }

    public getEmployeeDetails(employee) {
        const data = this.http.get<Employee>(this.apiURL + 'enrollees/'+  employee.id  );
        console.log(data);
        this._empDetailSubject$.next(data);
    }

    public saveEmployeeDetails(enroleeData) {
        console.log('enroleeData' + this.apiURL + 'enrollees' + JSON.stringify(enroleeData));
        return this.http.put(this.apiURL + 'enrollees/' + enroleeData.id, enroleeData);
    }

}
