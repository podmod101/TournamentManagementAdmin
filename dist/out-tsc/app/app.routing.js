"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var student_table_component_1 = require("./tables/student-table.component");
var tournament_table_component_1 = require("./tables/tournament-table.component");
var school_table_component_1 = require("./tables/school-table.component");
//import { AdminComponent } from "./admin/admin.component";
var appRoutes = [
    { path: 'StudentTable', component: student_table_component_1.StudentTableComponent },
    { path: 'SchoolTable', component: school_table_component_1.SchoolTableComponent },
    { path: 'TournamentTable', component: tournament_table_component_1.TournamentTableComponent },
    { path: '', redirectTo: '/SchoolTable', pathMatch: 'full' }
];
exports.RoutingConfig = router_1.RouterModule.forRoot(appRoutes, { enableTracing: true });
//# sourceMappingURL=app.routing.js.map