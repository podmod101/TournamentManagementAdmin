import { NgModule } from '@angular/core';

import { AppComponent } from "./app.component";
import { Repository } from './models/repository';
import { Student } from './models/Student';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ModelModule } from "./models/model.module";
import { AdminModule } from "./admin/admin.module";
//import { RoutingConfig } from './app.routing';



@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, FormsModule, HttpClientModule, ModelModule, AdminModule], //TablesModule, RoutingConfig
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
