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
var table_switch_1 = require("./table-switch");
var core_1 = require("@angular/core");
var TableComponent = /** @class */ (function () {
    function TableComponent(repo) {
        this.repo = repo;
    }
    TableComponent = __decorate([
        core_1.Component({
            selector: "table-root",
            templateUrl: "./table.component.html"
        }),
        __metadata("design:paramtypes", [repository_1.Repository])
    ], TableComponent);
    return TableComponent;
}());
exports.TableComponent = TableComponent;
var StudentCategory = /** @class */ (function () {
    function StudentCategory() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", table_switch_1.TableSwitch)
    ], StudentCategory.prototype, "tableSwitch", void 0);
    StudentCategory = __decorate([
        core_1.Component({
            selector: 'student-table',
            template: 'student-table.component.html'
        })
    ], StudentCategory);
    return StudentCategory;
}());
exports.StudentCategory = StudentCategory;
var SchoolCategory = /** @class */ (function () {
    function SchoolCategory() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", table_switch_1.TableSwitch)
    ], SchoolCategory.prototype, "tableSwitch", void 0);
    SchoolCategory = __decorate([
        core_1.Component({
            selector: 'school-table',
            template: 'school-table.component.html'
        })
    ], SchoolCategory);
    return SchoolCategory;
}());
exports.SchoolCategory = SchoolCategory;
var TournamentCategory = /** @class */ (function () {
    function TournamentCategory() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", table_switch_1.TableSwitch)
    ], TournamentCategory.prototype, "tableSwitch", void 0);
    TournamentCategory = __decorate([
        core_1.Component({
            selector: 'tournament-table',
            template: 'tournament-table.component.html'
        })
    ], TournamentCategory);
    return TournamentCategory;
}());
exports.TournamentCategory = TournamentCategory;
exports.tableSwitchComponents = [StudentCategory, SchoolCategory, TournamentCategory];
//# sourceMappingURL=table.component.js.map