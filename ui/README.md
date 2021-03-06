
# Enrollee List

This is a RxJS `BehaviorSubject` example in an Angular project.

Feature 1: The enrolee table is showing all enrolees, each one of them has an edit icon which is clickable to show their details.

Feature 2: On click of edit icon, the edit enrolee form open, where in only activation status and name are editable, and click submit to save, which calls deno service PUT /enrollees/{id}

Feature 3: On click of edit icon, deno service GET /enrollees/{id} is called to get the details of the selected enrollee

---

## An Angular 6 exercise

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
