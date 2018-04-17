import { Repository } from "../models/repository";
import { School } from "../models/School";
import { SchoolDetail } from "../models/SchoolDetail";
import { Component } from "@angular/core";

@Component({
	selector: "school-table",
	templateUrl: "./school-table.component.html"
})
export class SchoolTableComponent {
	constructor(private repo: Repository) { }

	get school(): School { return this.repo.school; }
	get schools(): School[] { return this.repo.schools; }

	get schoolDetail(): SchoolDetail { return this.repo.schoolDetail; } 
	get schoolDetails(): SchoolDetail[] { return this.repo.schoolDetails; } 
}