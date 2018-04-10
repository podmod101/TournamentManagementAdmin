import { Student } from "./Student";
import { Tournament } from "./Tournament";
import { StudentDetail } from "./StudentDetail";

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const studentsUrl = "/api/students";
const tournamentsUrl = "/api/tournaments";


//searchHeroes(term: string): Observable < Hero[] > { term = term.trim();

	// Add safe, URL encoded search parameter if there is a search term
	//const options = term ? { params: new HttpParams().set('name', term) } : {};


@Injectable()
export class Repository {
	//Will eventually need to instantiate these through an event handler
	constructor(private http: HttpClient) {
		this.getStudent(53);
		this.getStudents();

		this.getTournament(8);
		this.getTournaments();
	}



	getStudent(id: number) {
		this.http.get<Student>(studentsUrl + "/" + id).subscribe(response => this.student = response);
	}

	getStudents() {
		this.http.get<Student[]>(studentsUrl).subscribe(response => this.students = response);
	}



	getTournament(id: number) {
		this.http.get<Tournament>(tournamentsUrl + "/" + id).subscribe(response => this.tournament = response);
	}

	getTournaments() {
		this.http.get<Tournament[]>(tournamentsUrl).subscribe(response => this.tournaments = response);
	}
	
	student: Student;
	students: Student[];

	studentDetail: StudentDetail;
	studentDetails: StudentDetail[];

	tournament: Tournament;
	tournaments: Tournament[];
}