import { Student } from "./Student";
import { Injectable } from "@angular/core";
import { HttpBackend } from "@angular/common/http/src/backend";
import { HttpClient } from "@angular/common/http";

const studentsUrl = "/api/students";
//searchHeroes(term: string): Observable < Hero[] > { term = term.trim();

	// Add safe, URL encoded search parameter if there is a search term
	//const options = term ? { params: new HttpParams().set('name', term) } : {};


@Injectable()
export class Repository {
	constructor(private http: HttpClient) {
		//this.student = JSON.parse(document.getElementById("data").textContent);

		this.getStudents();
	}

	getStudents() {
		return this.http.get<Student[]>("/api/students").subscribe(response => this.student = response);
	}

	getStudent(id: number) {
		this.http.get("");
	}

	student: Student[];
}