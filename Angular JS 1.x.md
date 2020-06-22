# What is angular bootstrapping? Explain process.
* __Bootstrapping__ is the process of initializing, or starting, your Angular app. There are two ways to bootstrap an angular application. - Manual and Auto bootstrapping.
* __Auto bootstrapping__: The _ng-app_ directive is used for auto bootstrapping and indicates the root of the Angular application. Angular reads the HTML within that root and compiles it into an internal representation. This reading and compiling is the bootstrapping process.

Angular initializes / bootstraps automatically upon DOMContentLoaded event or document.readyState is set to complete. At this point AngularJS looks for the ng-app directive, then Angular will:
  * Load the module associated with the directive.
  * Create the application injector.
  * Compile the DOM starting from the ng-app root element.
This process is called auto-bootstrapping.
```
<html>
    <body ng-app="myApp">
        <div ng-controller="Ctrl">Hello {{msg}}!</div>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min.js"></script>
        <script>
            var app = angular.module('myApp', []);
            app.controller('Ctrl', function($scope) {
                $scope.msg = 'Nik';
            });
        </script>
    </body>
</html>
```
* __Manual bootstrapping__  is when we manually initialize angular app by using angular.bootstrap() function instead of using the _ng-app_ directive. This function takes the modules as parameters and should be called within angular.element(document).ready() function.

```
<html>
    <body>
        <div ng-controller="Ctrl">Hello {{msg}}!</div>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min.js"></script>
        <script>
            var app = angular.module('myApp', []);
            app.controller('Ctrl', function($scope) {
                $scope.msg = 'Nik';
            }); 
            //manual bootstrap process 
            angular.element(document).ready(function () { 
              angular.bootstrap(document, ['myApp']); 
            });
        </script>
    </body>
</html>
```
https://stackoverflow.com/questions/21058213/what-is-meant-by-bootstrapping-in-angular-js

# Define dependency injection.
* DI is a coding pattern in which a class asks for dependencies from external sources rather than creating them itself. 
* Dependencies are services or objects that a class needs to perform its function. 
* In Angular, the DI framework provides declared dependencies to a class when that class is instantiated. 
* The DI framework lets you supply data to a component from an injectable service class, defined in its own(service) file. 
* The @Injectable() decorator marks a service that can be injected && Angular dependency injector is responsible for creating service instances and injecting them into classes.

# What is Two-Way binding in Angular JS
Two-way Data binding in AngularJS is maintianing the synchronization between the model and the view.

When data in the model changes, the view reflects the change, and when data in the view changes, the model is updated as well. This happens immediately and automatically, which makes sure that the model and the view is updated/are in sync at all times.

# Explain angular digest cycle.

https://www.sitepoint.com/understanding-angulars-apply-digest/
https://stackoverflow.com/questions/35826219/angular-scope-digest-vs-scope-apply#answer-35826935
https://www.youtube.com/watch?v=SYuc1oSjhgY

# When does digest cycle trigger in angular. How to manually trigger a digest cycle?
Basically AngularJS binds event handlers to any element that interacts with Angular ($scope, directive, ...), every time the event fires, $apply is called which internally calls $digest which will trigger the re-evaluation of all the $watches.

AngularJS made a smart assumption that model changes happen only on user interaction / events:

* DOM events
* XHR responses firing callbacks
* Browser's location changes
* Timers (setTimout, setInterval) firing the callbacks
* Or trigger on certain events

Input directives+ngModel, ngClick, ngMouseOver etc.
* $http and $resource
* $location
* $timeout

# $watch(), $digest() and $apply()
https://www.sitepoint.com/understanding-angulars-apply-digest/
https://stackoverflow.com/questions/35826219/angular-scope-digest-vs-scope-apply#answer-35826935
https://www.youtube.com/watch?v=SYuc1oSjhgY


# Differences in setTimeout and $timeout
$timeout takes care of the digest cycle. Any changes in setTimeout will need to run the digest cycle manually to reflect in the applciation (Using _$scope.$apply()_ ).

# Services vs Factories vs Providers

# What is isolated scope ? 

# Define custom directives - Full Syntax

# In-Built directives

# Config vs Run
* Config is executed in configurstions phase of angular. Only Constants and Providers are available for injection.
* Run is executed after angular initializations is done and All Services, Constants, Values and Providers are available for injection.

# Routing - Full Syntax






# State Provider

# $http

# $rootScope

# Difference between emit and broadcast
* Emits sends the event up-wards towards parent scopes. 
* Broadcast send event in-wards towards the chile scopes.
* Use $rootScope.$broadcast('..EventName..') for firing the $on event listeners for all the controller (Sibling, Child, Parent etc.)

# Ways to communicate between components - Parent to Child, Child to Parent, Sibilings.

# How to change ng- prefix to your custom name

# How to manage dev dependencies
