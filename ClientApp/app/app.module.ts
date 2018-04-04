import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { ModelModule } from "./models/model.module";

import { Repository } from './models/repository';
import { Student } from './models/Student';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, ModelModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
