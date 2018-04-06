import { Component } from "@angular/core";
import { Repository } from "../models/repository";
import { StudentAdminComponent } from "./studentAdmin.component";

@Component({
	templateUrl: "admin.component.html"
})
export class AdminComponent {
	constructor(private repo: Repository) {

	}
}