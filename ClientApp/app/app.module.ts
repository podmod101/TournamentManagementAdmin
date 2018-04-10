import { NgModule } from '@angular/core';

import { AppComponent } from "./app.component";
import { TableComponent } from "./tables/table.component"; //!!IMPORTANT!!
import { StudentTableComponent } from "./tables/student-table.component";
import { TournamentTableComponent } from "./tables/tournament-table.component";

import { Repository } from './models/repository';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ModelModule } from "./models/model.module";

//import { AdminModule } from "./admin/admin.module";

//FIGURE OUT THIS ROUTING THING, IT MAY HELP A LOT WHEN SWITCHING BETWEEN NAV ITEMS
//import { RoutingConfig } from './app.routing';



@NgModule({
	declarations: [AppComponent, TableComponent, StudentTableComponent, TournamentTableComponent ],
	imports: [BrowserModule, FormsModule, HttpClientModule, ModelModule], //RoutingConfig, AdminModule
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
