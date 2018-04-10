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

module.exports = "\r\n\r\n\r\n<div class=\"container-fluid text-center\">\r\n\t<div class=\"row content\">\r\n\t\t<div id=\"bodySection\" class=\"col-md-8 text-left\">\r\n\t\t\t<table-root></table-root>\r\n\t\t</div>\r\n\r\n\t\t<div id=\"actionPane\" class=\"panel panel-default col-md-4 rounded\">\r\n\t\t\t<div class=\"panel-heading bg-info text-white\" style=\"padding: 10px;\">\r\n\t\t\t\t<h3 class=\"panel-title\">Selected Record Title</h3>\r\n\t\t\t</div>\r\n\t\t\t<ul class=\"nav nav-tabs\">\r\n\t\t\t\t<li class=\"active\"><a data-toggle=\"tab\" href=\"#details\">Details</a></li>\r\n\t\t\t\t<li><a data-toggle=\"tab\" href=\"#add\">Add</a></li>\r\n\t\t\t\t<li><a data-toggle=\"tab\" href=\"#edit\">Edit</a></li>\r\n\t\t\t</ul>\r\n\r\n\t\t\t<div class=\"tab-content\">\r\n\t\t\t\t<div id=\"details\" class=\"tab-pane fade in active\">\r\n\t\t\t\t\t<h3>Details</h3>\r\n\t\t\t\t\t<p>Show some record details here.</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"add\" class=\"tab-pane fade\">\r\n\t\t\t\t\t<h3>Add</h3>\r\n\t\t\t\t\t<p>Add a new record.</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"edit\" class=\"tab-pane fade\">\r\n\t\t\t\t\t<h3>Edit</h3>\r\n\t\t\t\t\t<p>Edit a record here.</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t</div>\r\n</div>"

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
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("./ClientApp/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tables_table_component__ = __webpack_require__("./ClientApp/app/tables/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tables_student_table_component__ = __webpack_require__("./ClientApp/app/tables/student-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tables_tournament_table_component__ = __webpack_require__("./ClientApp/app/tables/tournament-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_model_module__ = __webpack_require__("./ClientApp/app/models/model.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 //!!IMPORTANT!!






//import { AdminModule } from "./admin/admin.module";
//FIGURE OUT THIS ROUTING THING, IT MAY HELP A LOT WHEN SWITCHING BETWEEN NAV ITEMS
//import { RoutingConfig } from './app.routing';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_2__tables_table_component__["a" /* TableComponent */], __WEBPACK_IMPORTED_MODULE_3__tables_student_table_component__["a" /* StudentTableComponent */], __WEBPACK_IMPORTED_MODULE_4__tables_tournament_table_component__["a" /* TournamentTableComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_8__models_model_module__["a" /* ModelModule */]],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
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
//searchHeroes(term: string): Observable < Hero[] > { term = term.trim();
// Add safe, URL encoded search parameter if there is a search term
//const options = term ? { params: new HttpParams().set('name', term) } : {};
var Repository = /** @class */ (function () {
    //Will eventually need to instantiate these through an event handler
    function Repository(http) {
        this.http = http;
        this.getStudent(53);
        this.getStudents();
        this.getTournament(8);
        this.getTournaments();
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
    Repository = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], Repository);
    return Repository;
}());



/***/ }),

/***/ "./ClientApp/app/tables/student-table.component.html":
/***/ (function(module, exports) {

module.exports = "<!--TRY TO GET ROUTING WORKING FOR THE TABLE COMPONENT/MODULE/HTML-->\r\n<table class=\"table table-md table-striped table-hover\">\r\n\t<tr>\r\n\t\t<th>Hunting License #</th>\r\n\t\t<th>First</th>\r\n\t\t<th>Last</th>\r\n\t\t<th>Date of Birth</th>\r\n\t</tr>\r\n\t<tr *ngFor=\"let student of students\"> <!--this is where the click events will be placed to control action pane (needs to be cursor only, not carot)-->\r\n\t\t<td>{{student?.huntingLicenseNumber}}</td>\r\n\t\t<td>{{student?.firstName}}</td>\r\n\t\t<td>{{student?.lastName}}</td>\r\n\t\t<td>{{student?.dateOfBirth | date:'MM/dd/yyyy' }}</td>\r\n\t</tr>\r\n</table>\r\n"

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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: "student-table",
            template: __webpack_require__("./ClientApp/app/tables/student-table.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__models_repository__["a" /* Repository */]])
    ], StudentTableComponent);
    return StudentTableComponent;
}());



/***/ }),

/***/ "./ClientApp/app/tables/table.component.html":
/***/ (function(module, exports) {

module.exports = "<!--WILL NEED TO HAVE THIS DYNAMICALLY LOADED ACCORDING TO THE TOP NAV MENU-->\r\n\r\n<!--<student-table></student-table>-->\r\n\r\n<tournament-table></tournament-table>"

/***/ }),

/***/ "./ClientApp/app/tables/table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
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


var TableComponent = /** @class */ (function () {
    function TableComponent(repo) {
        this.repo = repo;
    }
    TableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: "table-root",
            template: __webpack_require__("./ClientApp/app/tables/table.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__models_repository__["a" /* Repository */]])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./ClientApp/app/tables/tournament-table.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-md table-striped table-hover\">\r\n\t<tr>\r\n\t\t<th>Name</th>\r\n\t\t<th>Location</th>\r\n\t\t<th>Address</th>\r\n\t\t<th>City</th>\r\n\t\t<th>State</th>\r\n\t\t<th>Zip</th>\r\n\t\t<th>Start</th>\r\n\t\t<th>End</th>\r\n\t</tr>\r\n\t<tr *ngFor=\"let tournament of tournaments\"> <!--this is where the click events will be placed to control action pane (needs to be cursor only, not carot)-->\r\n\t\t<td>{{tournament?.name}}</td>\r\n\t\t<td>{{tournament?.location}}</td>\r\n\t\t<td>{{tournament?.address}}</td>\r\n\t\t<td>{{tournament?.city}}</td>\r\n\t\t<td>{{tournament?.state}}</td>\r\n\t\t<td>{{tournament?.zip}}</td>\r\n\t\t<td>{{tournament?.startDate | date:'MM/dd/yyyy'}}</td>\r\n\t\t<td>{{tournament?.endDate | date:'MM/dd/yyyy'}}</td>\r\n\t</tr>\r\n</table>\r\n"

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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
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