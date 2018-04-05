import { Component } from "@angular/core";
import { Repository } from "../models/repository";
import { Student } from "../models/Student";

export class StudentAdminComponent {
	constructor(private repo: Repository) {
		this.repo.student = this.repo.getStudents();
	}


}