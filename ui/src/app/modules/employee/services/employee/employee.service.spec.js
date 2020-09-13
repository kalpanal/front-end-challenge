"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var employee_service_1 = require("./employee.service");
describe('EmployeeService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [employee_service_1.EmployeeService]
        });
    });
    it('should be created', testing_1.inject([employee_service_1.EmployeeService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=employee.service.spec.js.map