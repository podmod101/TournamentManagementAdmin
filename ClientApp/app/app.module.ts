import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ModelModule } from "./models/model.module";
import { Repository } from './models/repository';

import { AppComponent } from "./app.component";
import { StudentTableComponent } from "./tables/student-table.component";
import { TournamentTableComponent } from "./tables/tournament-table.component";
import { SchoolTableComponent } from "./tables/school-table.component";
import { RoutingConfig } from "./app.routing";


//const appRoutes: Routes = [
//	{ path: 'StudentTable', component: StudentTableComponent },
//	{ path: 'SchoolTable', component: SchoolTableComponent },
//	{ path: 'TournamentTable', component: TournamentTableComponent },
//	{ path: '', redirectTo: '/SchoolTable', pathMatch: 'full' }
//]

@NgModule({
	declarations: [AppComponent, StudentTableComponent, SchoolTableComponent, TournamentTableComponent ],
	imports: [BrowserModule, FormsModule, HttpClientModule, ModelModule, RoutingConfig],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
