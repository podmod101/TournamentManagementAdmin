"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var model_module_1 = require("./models/model.module");
var app_component_1 = require("./app.component");
//import { TableComponent } from "./tables/table.component";
var student_table_component_1 = require("./tables/student-table.component");
var tournament_table_component_1 = require("./tables/tournament-table.component");
var school_table_component_1 = require("./tables/school-table.component");
var app_routing_1 = require("./app.routing");
//import { RouterModule, Routes } from "@angular/router";
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
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, student_table_component_1.StudentTableComponent, school_table_component_1.SchoolTableComponent, tournament_table_component_1.TournamentTableComponent],
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpClientModule, model_module_1.ModelModule, app_routing_1.RoutingConfig],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map