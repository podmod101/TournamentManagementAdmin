import { Repository } from "../models/repository";
import { Student } from "../models/Student";
import { StudentDetail } from "../models/StudentDetail";
import { Component } from "@angular/core";

@Component({
	selector: "student-table",
	templateUrl: "./student-table.component.html"
})
export class StudentTableComponent {
	constructor(private repo: Repository) { }

	get student(): Student { return this.repo.student; }
	get students(): Student[] { return this.repo.students; }

	get studentDetail(): StudentDetail { return this.repo.studentDetail; }
	get studentDetails(): StudentDetail[] { return this.repo.studentDetails; }
}