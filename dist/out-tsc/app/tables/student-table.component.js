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
var repository_1 = require("../models/repository");
var core_1 = require("@angular/core");
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
        core_1.Component({
            selector: "student-table",
            templateUrl: "./student-table.component.html"
        }),
        __metadata("design:paramtypes", [repository_1.Repository])
    ], StudentTableComponent);
    return StudentTableComponent;
}());
exports.StudentTableComponent = StudentTableComponent;
//# sourceMappingURL=student-table.component.js.map