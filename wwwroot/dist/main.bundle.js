webpackJsonp(["main"],{

/***/ "./ClientApp/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./ClientApp/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./ClientApp/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./ClientApp/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<nav class=\"navbar navbar-default\">\r\n\t<div class=\"container-fluid\">\r\n\t\t<!-- Brand and toggle get grouped for better mobile display -->\r\n\t\t<div class=\"navbar-header bg-light\">\r\n\t\t\t<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n\t\t\t\t<span class=\"sr-only\">Toggle navigation</span>\r\n\t\t\t\t<span class=\"icon-bar\"></span>\r\n\t\t\t\t<span class=\"icon-bar\"></span>\r\n\t\t\t\t<span class=\"icon-bar\"></span>\r\n\t\t\t</button>\r\n\t\t\t<a class=\"navbar-brand\" href=\"#\">AIMS Admin</a>\r\n\t\t</div>\r\n\r\n\t\t<!-- Collect the nav links, forms, and other content for toggling -->\r\n\t\t<div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n\t\t\t<ul class=\"nav navbar-nav\">\r\n\t\t\t\t<li class=\"student-table\"><a routerLink=\"/StudentTable\">Students <span class=\"sr-only\">(current)</span></a></li>\r\n\t\t\t\t<li class=\"school-table\"><a routerLink=\"/SchoolTable\">Schools</a></li>\r\n\t\t\t\t<li class=\"tournament-table\"><a routerLink=\"/TournamentTable\">Tournaments</a></li>\r\n\t\t\t\t<!--<li class=\"dropdown\">\r\n\t\t\t\t\t<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Tournaments <span class=\"caret\"></span></a>\r\n\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t<li><a href=\"#\">Current</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">Scores</a></li>\r\n\t\t\t\t\t\t<!--<li><a href=\"#\">History</a></li>\r\n\t\t\t\t\t\t<li role=\"separator\" class=\"divider\"></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">History</a></li>\r\n\t\t\t\t\t\t<li role=\"separator\" class=\"divider\"></li>\r\n\t\t\t\t\t\t<li><a href=\"#\"></a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</li>-->\r\n\t\t\t</ul>\r\n\t\t\t<ul class=\"nav navbar-nav navbar-right\">\r\n\t\t\t\t<li><a href=\"#\"><span class=\"glyphicon glyphicon-log-out\" aria-hidden=\"true\"></span> Logout</a></li>\r\n\t\t\t\t<!--<li class=\"dropdown\">\r\n\t\t\t\t\t<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a>\r\n\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t<li><a href=\"#\">Action</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">Another action</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">Something else here</a></li>\r\n\t\t\t\t\t\t<li role=\"separator\" class=\"divider\"></li>\r\n\t\t\t\t\t\t<li><a href=\"#\">Separated link</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</li>-->\r\n\t\t\t</ul>\r\n\t\t\t<!--<form class=\"navbar-form navbar-right\">\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<button type=\"submit\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-search\"></span> Search</button>\r\n\t\t\t</form>-->\r\n\t\t</div><!-- /.navbar-collapse -->\r\n\t</div><!-- /.container-fluid -->\r\n</nav>\r\n\r\n<!--BREADCRUMB SETUP-->\r\n<!--<ol class=\"breadcrumb\">\r\n\t<li><a href=\"#\">Home</a></li>\r\n\t<li><a href=\"#\">Schools</a></li>\r\n\t<li class=\"active\">All Schools</li>\r\n</ol>-->\r\n\r\n<div class=\"container-fluid text-center\"  id=\"bodySection\">\r\n\t<div class=\"row content\">\r\n\t\t<div class=\"col-md-8 text-left\">\r\n\r\n\t\t\t<router-outlet></router-outlet>\r\n\t\t\t<!--PAGINATION SETUP-->\r\n\t\t\t<!--\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-4\"></div>\r\n\t\t\t<nav class=\"col-md-4\" aria-label=\"Page navigation\">\r\n\t\t\t\t<ul class=\"pagination\">\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href=\"#\" aria-label=\"Previous\">\r\n\t\t\t\t\t\t\t<span aria-hidden=\"true\">&laquo;</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li><a href=\"#\">1</a></li>\r\n\t\t\t\t\t<li><a href=\"#\">2</a></li>\r\n\t\t\t\t\t<li><a href=\"#\">3</a></li>\r\n\t\t\t\t\t<li><a href=\"#\">4</a></li>\r\n\t\t\t\t\t<li><a href=\"#\">5</a></li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href=\"#\" aria-label=\"Next\">\r\n\t\t\t\t\t\t\t<span aria-hidden=\"true\">&raquo;</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t</nav>\r\n\t\t\t<div class=\"col-md-4\"></div>\r\n\t\t</div>\r\n\t\t</ul>-->\r\n\t</div>\r\n\r\n\t<div id=\"actionPane\" class=\"panel panel-default col-md-4 rounded\">\r\n\t\t<div class=\"panel-heading bg-info text-white\" style=\"padding: 10px;\">\r\n\t\t\t<h3 style=\"font-weight: 600;\" class=\"panel-title\">Panel Title Here</h3>\r\n\t\t</div>\r\n\t\t<ul class=\"nav nav-tabs\">\r\n\t\t\t<li class=\"active\"><a data-toggle=\"tab\" href=\"#details\">Details</a></li>\r\n\t\t\t<li><a data-toggle=\"tab\" href=\"#add\">Add</a></li>\r\n\t\t\t<li><a data-toggle=\"tab\" href=\"#edit\">Edit</a></li>\r\n\t\t</ul>\r\n\r\n\t\t<div class=\"tab-content\">\r\n\t\t\t<div id=\"details\" class=\"tab-pane fade in active\">\r\n\t\t\t\t<h3>Details</h3>\r\n\t\t\t\t<p>Show some details here.</p>\r\n\t\t\t\t<!--<school-details></school-details>\r\n\t\t\t<student-details></student-details>\r\n\t\t\t<tournament-details></tournament-details>-->\r\n\t\t</div>\r\n\t\t\t\t<div id=\"add\" class=\"tab-pane fade\">\r\n\t\t\t\t\t<h3>Add</h3>\r\n\t\t\t\t\t<p>Add a new record.</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"edit\" class=\"tab-pane fade\">\r\n\t\t\t\t\t<h3>Edit</h3>\r\n\t\t\t\t\t<p>Edit a record here.</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__("./ClientApp/app/models/repository.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { TableSwitch } from './tables/table-switch';
var AppComponent = /** @class */ (function () {
    function AppComponent(repo) {
        this.repo = repo;
    }
    Object.defineProperty(AppComponent.prototype, "student", {
        get: function () { return this.repo.student; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "students", {
        get: function () { return this.repo.students; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "studentDetail", {
        get: function () { return this.repo.studentDetail; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "studentDetails", {
        get: function () { return this.repo.studentDetails; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "schoolDetail", {
        get: function () { return this.repo.schoolDetail; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "schoolDetails", {
        get: function () { return this.repo.schoolDetails; },
        enumerable: true,
        configurable: true
    });
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./ClientApp/app/app.component.html"),
            styles: [__webpack_require__("./ClientApp/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./ClientApp/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_model_module__ = __webpack_require__("./ClientApp/app/models/model.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./ClientApp/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tables_student_table_component__ = __webpack_require__("./ClientApp/app/tables/student-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tables_tournament_table_component__ = __webpack_require__("./ClientApp/app/tables/tournament-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tables_school_table_component__ = __webpack_require__("./ClientApp/app/tables/school-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing__ = __webpack_require__("./ClientApp/app/app.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










//const appRoutes: Routes = [
//	{ path: 'StudentTable', component: StudentTableComponent },
//	{ path: 'SchoolTable', component: SchoolTableComponent },
//	{ path: 'TournamentTable', component: TournamentTableComponent },
//	{ path: '', redirectTo: '/SchoolTable', pathMatch: 'full' }
//]
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_6__tables_student_table_component__["a" /* StudentTableComponent */], __WEBPACK_IMPORTED_MODULE_8__tables_school_table_component__["a" /* SchoolTableComponent */], __WEBPACK_IMPORTED_MODULE_7__tables_tournament_table_component__["a" /* TournamentTableComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_4__models_model_module__["a" /* ModelModule */], __WEBPACK_IMPORTED_MODULE_9__app_routing__["a" /* RoutingConfig */]],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./ClientApp/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tables_student_table_component__ = __webpack_require__("./ClientApp/app/tables/student-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tables_tournament_table_component__ = __webpack_require__("./ClientApp/app/tables/tournament-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tables_school_table_component__ = __webpack_require__("./ClientApp/app/tables/school-table.component.ts");




var appRoutes = [
    { path: 'StudentTable', component: __WEBPACK_IMPORTED_MODULE_1__tables_student_table_component__["a" /* StudentTableComponent */] },
    { path: 'SchoolTable', component: __WEBPACK_IMPORTED_MODULE_3__tables_school_table_component__["a" /* SchoolTableComponent */] },
    { path: 'TournamentTable', component: __WEBPACK_IMPORTED_MODULE_2__tables_tournament_table_component__["a" /* TournamentTableComponent */] },
    { path: '', redirectTo: '/SchoolTable', pathMatch: 'full' }
];
var RoutingConfig = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true });


/***/ }),

/***/ "./ClientApp/app/models/model.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__repository__ = __webpack_require__("./ClientApp/app/models/repository.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ModelModule = /** @class */ (function () {
    function ModelModule() {
    }
    ModelModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            providers: [__WEBPACK_IMPORTED_MODULE_1__repository__["a" /* Repository */]]
        })
    ], ModelModule);
    return ModelModule;
}());



/***/ }),

/***/ "./ClientApp/app/models/repository.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Repository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var studentsUrl = "/api/students";
var tournamentsUrl = "/api/tournaments";
var schoolsUrl = "/api/schools";
//searchHeroes(term: string): Observable < Hero[] > { term = term.trim();
// Add safe, URL encoded search parameter if there is a search term
//const options = term ? { params: new HttpParams().set('name', term) } : {};
var Repository = /** @class */ (function () {
    //Will eventually need to instantiate these through an event handler
    function Repository(http) {
        this.http = http;
        //this.getStudent(53);
        this.getStudents();
        //this.getTournament(8);
        this.getTournaments();
        //this.getSchool(52);
        this.getSchools();
    }
    Repository.prototype.getStudent = function (id) {
        var _this = this;
        this.http.get(studentsUrl + "/" + id).subscribe(function (response) { return _this.student = response; });
    };
    Repository.prototype.getStudents = function () {
        var _this = this;
        this.http.get(studentsUrl).subscribe(function (response) { return _this.students = response; });
    };
    Repository.prototype.getTournament = function (id) {
        var _this = this;
        this.http.get(tournamentsUrl + "/" + id).subscribe(function (response) { return _this.tournament = response; });
    };
    Repository.prototype.getTournaments = function () {
        var _this = this;
        this.http.get(tournamentsUrl).subscribe(function (response) { return _this.tournaments = response; });
    };
    Repository.prototype.getSchool = function (id) {
        var _this = this;
        this.http.get(schoolsUrl + "/" + id).subscribe(function (response) { return _this.school = response; });
    };
    Repository.prototype.getSchools = function () {
        var _this = this;
        this.http.get(schoolsUrl).subscribe(function (response) { return _this.schools = response; });
    };
    Repository = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], Repository);
    return Repository;
}());



/***/ }),

/***/ "./ClientApp/app/tables/school-table.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-md table-hover table-bordered\">\r\n\t<tr style=\"cursor: default; background-color: lightgray;\">\r\n\t\t<th>School</th>\r\n\t\t<!--<th>County</th>-->\r\n\t\t<th>Address</th>\r\n\t\t<th>Address 2</th>\r\n\t\t<th>City</th>\r\n\t\t<th>State</th>\r\n\t\t<th>Zip</th>\r\n\t</tr>\r\n\t<tr *ngFor=\"let school of schools\" style=\"cursor: pointer\"> <!-- (click)=\"rowClick({{school?.schoolId}})\"-->\r\n\t\t<td>{{school?.name}}</td>\r\n\t\t<!--<td>{{school?.county?.name}}</td>-->\r\n\t\t<td>{{school?.address}}</td>\r\n\t\t<td>{{school?.address2 || 'N/A'}}</td>\r\n\t\t<td>{{school?.city}}</td>\r\n\t\t<td>{{school?.state}}</td>\r\n\t\t<td>{{school?.zip}}</td>\r\n\t</tr>\r\n</table>\r\n"

/***/ }),

/***/ "./ClientApp/app/tables/school-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_repository__ = __webpack_require__("./ClientApp/app/models/repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SchoolTableComponent = /** @class */ (function () {
    function SchoolTableComponent(repo) {
        this.repo = repo;
    }
    Object.defineProperty(SchoolTableComponent.prototype, "school", {
        get: function () { return this.repo.school; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchoolTableComponent.prototype, "schools", {
        get: function () { return this.repo.schools; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchoolTableComponent.prototype, "schoolDetail", {
        get: function () { return this.repo.schoolDetail; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchoolTableComponent.prototype, "schoolDetails", {
        get: function () { return this.repo.schoolDetails; },
        enumerable: true,
        configurable: true
    });
    SchoolTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: "school-table",
            template: __webpack_require__("./ClientApp/app/tables/school-table.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__models_repository__["a" /* Repository */]])
    ], SchoolTableComponent);
    return SchoolTableComponent;
}());



/***/ }),

/***/ "./ClientApp/app/tables/student-table.component.html":
/***/ (function(module, exports) {

module.exports = "<!--TRY TO GET ROUTING WORKING FOR THE TABLE COMPONENT/MODULE/HTML-->\r\n<table class=\"table table-md table-hover table-bordered\">\r\n\t<tr style=\"cursor: default; background-color: lightgray;\">\r\n\t\t<th>Hunting License #</th>\r\n\t\t<th>First</th>\r\n\t\t<th>Last</th>\r\n\t\t<th>Date of Birth</th>\r\n\t</tr>\r\n\t<tr *ngFor=\"let student of students\" style=\"cursor: pointer\">\r\n\t\t<td>{{student?.huntingLicenseNumber}}</td>\r\n\t\t<td>{{student?.firstName}}</td>\r\n\t\t<td>{{student?.lastName}}</td>\r\n\t\t<td>{{student?.dateOfBirth | date:'MM/dd/yyyy' }}</td>\r\n\t</tr>\r\n</table>\r\n"

/***/ }),

/***/ "./ClientApp/app/tables/student-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_repository__ = __webpack_require__("./ClientApp/app/models/repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudentTableComponent = /** @class */ (function () {
    function StudentTableComponent(repo) {
        this.repo = repo;
    }
    Object.defineProperty(StudentTableComponent.prototype, "student", {
        get: function () { return this.repo.student; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StudentTableComponent.prototype, "students", {
        get: function () { return this.repo.students; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StudentTableComponent.prototype, "studentDetail", {
        get: function () { return this.repo.studentDetail; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StudentTableComponent.prototype, "studentDetails", {
        get: function () { return this.repo.studentDetails; },
        enumerable: true,
        configurable: true
    });
    StudentTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: "student-table",
            template: __webpack_require__("./ClientApp/app/tables/student-table.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__models_repository__["a" /* Repository */]])
    ], StudentTableComponent);
    return StudentTableComponent;
}());



/***/ }),

/***/ "./ClientApp/app/tables/tournament-table.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-md table-hover table-bordered\">\r\n\t<tr style=\"cursor: default; background-color: lightgray;\">\r\n\t\t<th>Name</th>\r\n\t\t<th>Location</th>\r\n\t\t<th>Address</th>\r\n\t\t<th>City</th>\r\n\t\t<th>State</th>\r\n\t\t<th>Zip</th>\r\n\t\t<th>Start</th>\r\n\t\t<th>End</th>\r\n\t</tr>\r\n\t<tr *ngFor=\"let tournament of tournaments\" style=\"cursor: pointer\">\r\n\t\t<td>{{tournament?.name}}</td>\r\n\t\t<td>{{tournament?.location}}</td>\r\n\t\t<td>{{tournament?.address}}</td>\r\n\t\t<td>{{tournament?.city}}</td>\r\n\t\t<td>{{tournament?.state}}</td>\r\n\t\t<td>{{tournament?.zip}}</td>\r\n\t\t<td>{{tournament?.startDate | date:'MM/dd/yyyy'}}</td>\r\n\t\t<td>{{tournament?.endDate | date:'MM/dd/yyyy'}}</td>\r\n\t</tr>\r\n</table>\r\n"

/***/ }),

/***/ "./ClientApp/app/tables/tournament-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TournamentTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_repository__ = __webpack_require__("./ClientApp/app/models/repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TournamentTableComponent = /** @class */ (function () {
    function TournamentTableComponent(repo) {
        this.repo = repo;
    }
    Object.defineProperty(TournamentTableComponent.prototype, "tournament", {
        get: function () { return this.repo.tournament; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TournamentTableComponent.prototype, "tournaments", {
        get: function () { return this.repo.tournaments; },
        enumerable: true,
        configurable: true
    });
    TournamentTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: "tournament-table",
            template: __webpack_require__("./ClientApp/app/tables/tournament-table.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__models_repository__["a" /* Repository */]])
    ], TournamentTableComponent);
    return TournamentTableComponent;
}());



/***/ }),

/***/ "./ClientApp/boot.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__("./ClientApp/app/app.module.ts");


var bootApplication = function () {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]);
};
if (true) {
    module["hot"].accept();
    module["hot"].dispose(function () {
        var oldRootElem = document.querySelector("app-root");
        var newRootElem = document.querySelector("app-root");
        oldRootElem.parentNode.insertBefore(newRootElem, oldRootElem);
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().destroy();
    });
}
if (document.readyState === "complete") {
    bootApplication();
}
else {
    document.addEventListener("DOMContentLoaded", bootApplication);
}


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/webpack-hot-middleware/client.js?path=__webpack_hmr&dynamicPublicPath=true");
module.exports = __webpack_require__("./ClientApp/boot.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map