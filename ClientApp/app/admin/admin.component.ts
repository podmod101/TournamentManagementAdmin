import { Component } from "@angular/core";
import { Repository } from "../models/repository";
import { StudentAdminComponent } from "./studentAdmin.component";


export class AdminComponent {
	constructor(private repo: Repository) {
		this.repo.getStudents();
	}
}