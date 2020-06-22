https://angular.io/guide/reactive-forms

https://angular.io/guide/forms

https://angular.io/guide/attribute-directives

https://angular.io/guide/structural-directives

https://angular.io/guide/pipes

https://blog.thoughtram.io/angular/2016/02/22/angular-2-change-detection-explained.html

# Advantages and disadvantages of SPA

# Advantages and dis-advantages of Angular

# Why Angular 

# Main features of Angular
```
SPA
Dependency Injection 
Dynamic Loading
Templating
Directives
Dynamic Component Loading
Lazy Loading
```

# Why use TypeScript in Angular development

# Whats is difference b/w TS and JS

# Will TS execute in browser

# How's TS compiled to JS

# New features of Angular 6 & 7 and what are there advantages


# Differences between Angular JS 1 and Angular 2
- Angular JS uses Javasript, Angular2 Uses Typescript.
- Angular 1 is controller based, Angular 2 is component based.
- 

# Differences between Angular 2, 4 and 6 

2.0 to 4.0 has reduced it’s bundled file size by 60%.

# How do you improve performance of Angular app
Use onPush change detection strategy.

# What are the production build files. How to do production build.
ng build --prod
_Optional:_
ng build --prod --build-optimizer // Total bundle sizes with Build Optimizer are smaller

https://github.com/angular/angular-cli/wiki/build#bundling--tree-shaking

# How to secure Angular application

# Template reference variables
* A template reference variable is often a reference to a DOM element within a template. It can also be a reference to an Angular component or directive or a web component.
* Use the hash symbol (#) to declare a reference variable.
```
<input #phone placeholder="phone number">

<!-- lots of other elements -->

<!-- phone refers to the input element; pass its `value` to an event handler -->
<button (click)="callPhone(phone.value)">Call</button>
```

https://angular.io/guide/template-syntax#ref-vars

# How to minify Angular app
Use ``` ng build --prod --build-optimizer ```

OR

Compress using Brotli compression
``` for i in dist/*; do brotli $i; done ```

# How to setup production environment specific settings/variables for application.?
Use _fileReplacements_ in projects.<project>.configurations.procution.fileReplacements section in angular.json
 
```
// Assuming we maintain "src/environments/environment.ts" && "src/environments/environment.prod.ts"
"configurations": {
            "production": {
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.prod.ts"
                }
              ],
```
```
// File: environment.prod.ts
export const environment = {
  production: true,
  xyzSetting: true
};
```

# How to change ng- prefix to your custom name

# How to manage dev dependencies
These packages are listed in the _devDependencies_ section of package.json

To add a new devDependency, use either one of the following commands:

```
npm install --dev <package-name>
// OR
yarn add --dev <package-name>
```

# What is dependency injection
* DI is a coding pattern in which a class asks for dependencies from external sources rather than creating them itself. 
* Dependencies are services or objects that a class needs to perform its function. 
* In Angular, the DI framework provides declared dependencies to a class when that class is instantiated. 
* The DI framework lets you supply data to a component from an injectable service class, defined in its own(service) file. 
* The @Injectable() decorator marks a service that can be injected && Angular dependency injector is responsible for creating service instances and injecting them into classes.

# Inversion of control (IOC)

# Lazy Loading
There are three main steps to setting up a lazy loaded feature module:

* Create the feature module.
* Create the feature module’s routing module.
* Configure the routes.

Create a feature module with routing
```ng generate module customers --routing```
Add Components under feature module
```ng generate component customers/customer-list```

* app-routing.module.ts
```
content_copy
const routes: Routes = [
  {
    path: 'customers',
    loadChildren: './customers/customers.module#CustomersModule'
  },
  {
    path: 'orders',
    loadChildren: './orders/orders.module#OrdersModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];
```

* customers-routing.module.ts
```
customers-routing.module.ts
content_copy
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerListComponent } from './customer-list/customer-list.component';


const routes: Routes = [
  {
    path: '',
    component: CustomerListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
```

* customers.module.ts
```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  declarations: [CustomerListComponent]
})
export class CustomersModule { }
```

# Tree Shaking
Tree shaking is a term commonly used in the JavaScript context for dead-code elimination. It relies on the static structure of ES2015 module syntax, i.e. import and export. It removes any unused code i.e which are not imported while building.

# How to use JWT tokens
- Using interceptors

http://jasonwatmore.com/post/2018/05/23/angular-6-jwt-authentication-example-tutorial#jwt-interceptor-ts

# One-way bind in Angular
One-way data binding is achieved using the double curly braces {{}} or square braces [] or *.

# Two-Way binding
In two-way data binding both the class variables and the template keep each other up to date. This is achieved by using [()].
```<input [(ngModel)]="msg" />```

# What is angular bootstrapping? Explain process.
@NgModule.bootstrap property identifies the AppComponent(provided in @NgModule.bootstrap) as the bootstrap component. When Angular launches the app, it places the HTML rendering of AppComponent in the DOM i.e inside the AppComponent selector element in index.html.

__Bootstrapping in main.ts__

You launch the application by bootstrapping the AppModule in the main.ts file.

Angular offers a variety of bootstrapping options targeting multiple platforms. This page describes two options, both targeting the browser.
```
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```
# Different ways of bootstrapping Angular Application.?
In Angular there are typically 3 ways of bootstrapping the application :
* Default or Automatic Bootstrapping
* Manual Bootstrapping
* Angular Elements ( >=v6 )

******* COMPLETE FROM REFERENCE LINK *********

https://medium.com/learnwithrahul/ways-of-bootstrapping-angular-applications-d379f594f604

# What is a module / Module Syntax / Options / Create Custom module
A module is basically a container to group related components, services, directives etc.

An NgModule is a class marked by the @NgModule decorator. @NgModule takes a metadata object that describes how to compile a component's template and how to create an injector at runtime.

The bootstrap property is where we define the root component of our module. 
```
import { NgModule } from '@angular/core';

@NgModule({
  imports: [ ... ],
  exports: [ ... ],
  declarations: [ ... ],
  providers: [ ... ],
  bootstrap: [ ... ]
})
export class AppModule { }
```
# JavaScript Modules vs. NgModules

The NgModule classes differ from JavaScript module in the following key ways:

* An NgModule bounds declarable classes only. Declarables are the only classes that matter to the Angular compiler.
* An NgModule can only export the declarable classes it owns or imports from other modules. It doesn't declare or export any other kind of class.
* Instead of defining all member classes in one giant file as in a JavaScript module, you list the module's classes in the @NgModule.declarations list.
* Unlike JavaScript modules, an NgModule can extend the entire application with services by adding providers to the @NgModule.providers list.


https://angular.io/guide/ngmodule-vs-jsmodule

# What is a component / Component Syntax / Options
A component controls a part of screen called a view. Components are defined to control the template/view and reuse it across the applicaiton.
* _template_ takes precedence if both _templateUrl_ and _template_ are defined. 
* template/templateUrl is mandatory for defining component.

```
import { Component, OnInit } from '@angular/core';

@Component({
  selector:    'app-hero-list',
  templateUrl: './hero-list.component.html',
  providers:  [ HeroService ]
})

export class HeroListComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private service: HeroService) { }

  ngOnInit() {
    this.heroes = this.service.getHeroes();
  }

  selectHero(hero: Hero) { this.selectedHero = hero; }
}
```

# Component Life Cycle Hooks
- ngOnChanges()	
- ngOnInit()	
- ngDoCheck()	
- ngAfterContentInit()	
- ngAfterContentChecked()	
- ngAfterViewInit()	
- ngAfterViewChecked()	
- ngOnDestroy()

ngOnChanges()	
Respond when Angular (re)sets data-bound input properties. The method receives a SimpleChanges object of current and previous property values.

Called before ngOnInit() and whenever one or more data-bound input properties change.

ngOnInit()	
Initialize the directive/component after Angular first displays the data-bound properties and sets the directive/component's input properties.

Called once, after the first ngOnChanges().

ngDoCheck()	
Detect and act upon changes that Angular can't or won't detect on its own.

Called during every change detection run, immediately after ngOnChanges() and ngOnInit().

ngAfterContentInit()	
Respond after Angular projects external content into the component's view / the view that a directive is in.

Called once after the first ngDoCheck().

ngAfterContentChecked()	
Respond after Angular checks the content projected into the directive/component.

Called after the ngAfterContentInit() and every subsequent ngDoCheck().

ngAfterViewInit()	
Respond after Angular initializes the component's views and child views / the view that a directive is in.

Called once after the first ngAfterContentChecked().

ngAfterViewChecked()	
Respond after Angular checks the component's views and child views / the view that a directive is in.

Called after the ngAfterViewInit and every subsequent ngAfterContentChecked().

ngOnDestroy()
Cleanup just before Angular destroys the directive/component. 


# Dynamic Component Loader


# How to / Ways to share data between sibling components, child to parent, parent to child component.



# How can i replace a component with other component in view when a event triggers.



# Can i use component in view without registering it in module
Just import in the current component and Use it.







# Type of directives / Structural & Attribute directives diff & syntax

# Directive Definition / Syntax / Create Custom Directive

# List InBuild Directives in Angular
```
*ngFor
*ngIf
<div [ngSwitch]="conditionExpression">
<ng-template [ngSwitchCase]="case1Exp">...</ng-template>
<ng-template ngSwitchCase="case2LiteralString">...</ng-template>
<ng-template ngSwitchDefault>...</ng-template>
</div>
<div [ngClass]="{'active': isActive, 'disabled': isDisabled}">
<div [ngStyle]="{'property': 'value'}">

```



# What are pipes in Angular
Angular pipes used for display-value transformations in our template HTML.
```
<!-- Default format: output 'Jun 15, 2015'-->
 <p>Today is {{today | date}}</p>
 
<!-- fullDate format: output 'Monday, June 15, 2015'-->
<p>The date is {{today | date:'fullDate'}}</p>

 <!-- shortTime format: output '9:43 AM'-->
 <p>The time is {{today | date:'shortTime'}}</p>
 
 
```

# Pipe Definition / Syntax / Create Custom pipe


# Events in Angular / EventEmitter








# Routing Syntax / Setup
* menu.html
```
<button routerLink="/heroes">Heros</button>
<button routerLink="/detail/4">Hreo 4 Details</button>
```

* app-routing.module.ts
~~~~
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

~~~~
* app.module.ts 
~~~~
import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
  ...
  AppRoutingModule
  ]
})
~~~~
* app.component.html
```
<router-outlet></router-outlet>
```

# Parameterised Route

* hero-detail.component.ts
~~~~
import { ActivatedRoute } from '@angular/router';

constructor(
    private route: ActivatedRoute,
)

getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
~~~~


# What is Child Routing

# How to do a http request, Syntax





# Reactive Forms

# Template-driven forms

# Dynamic Forms

# Form Validation



# RxJS

# Differences between promise and observable

# Promise definition & Example

# Define an observable / Observable definition & Example

# Can i use map operator outside pipe in ng 6?

# How to handle error using observables or in service call?

# How to get observables result after execution of all?

# What's Async and Await




