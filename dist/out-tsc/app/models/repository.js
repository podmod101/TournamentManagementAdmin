"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
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
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], Repository);
    return Repository;
}());
exports.Repository = Repository;
//# sourceMappingURL=repository.js.map