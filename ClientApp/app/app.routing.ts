import { Routes, RouterModule } from "@angular/router";

import { StudentTableComponent } from "./tables/student-table.component";
import { TournamentTableComponent } from "./tables/tournament-table.component";
import { SchoolTableComponent } from "./tables/school-table.component";



const appRoutes: Routes = [
	{ path: 'StudentTable', component: StudentTableComponent },
	{ path: 'SchoolTable', component: SchoolTableComponent },
	{ path: 'TournamentTable', component: TournamentTableComponent },
	{ path: '', redirectTo: '/SchoolTable', pathMatch: 'full' }
]



export const RoutingConfig = RouterModule.forRoot(appRoutes, { enableTracing: true });