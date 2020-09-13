"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var employee_module_1 = require("./employee.module");
describe('EmployeeModule', function () {
    var employeeModule;
    beforeEach(function () {
        employeeModule = new employee_module_1.EmployeeModule();
    });
    it('should create an instance', function () {
        expect(employeeModule).toBeTruthy();
    });
});
//# sourceMappingURL=employee.module.spec.js.map