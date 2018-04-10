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
        core_1.Component({
            selector: "tournament-table",
            templateUrl: "./tournament-table.component.html"
        }),
        __metadata("design:paramtypes", [repository_1.Repository])
    ], TournamentTableComponent);
    return TournamentTableComponent;
}());
exports.TournamentTableComponent = TournamentTableComponent;
//# sourceMappingURL=tournament-table.component.js.map