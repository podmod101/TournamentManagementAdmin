import { Component } from "@angular/core";
import { Repository } from "../models/repository";
import { Student } from "../models/Student";

@Component({
	templateUrl: "studentAdmin.component.html"
})
export class StudentAdminComponent {
	constructor(private repo: Repository) { }

	get student(): Student {
		return this.repo.student;
	}
}