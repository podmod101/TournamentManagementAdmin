import { Student } from "./Student";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { StudentDetail } from "./StudentDetail";

const studentsUrl = "/api/students";
//searchHeroes(term: string): Observable < Hero[] > { term = term.trim();

	// Add safe, URL encoded search parameter if there is a search term
	//const options = term ? { params: new HttpParams().set('name', term) } : {};


@Injectable()
export class Repository {
	constructor(private http: HttpClient) {
		this.getStudent(53);
		this.getStudents();
	}

	getStudent(id: number) {
		this.http.get<Student>(studentsUrl + "/" + id).subscribe(response => this.student = response);
	}

	getStudents() {
		this.http.get<Student[]>(studentsUrl).subscribe(response => this.students = response);
	}
	
	student: Student;
	students: Student[];

	studentDetail: StudentDetail;
	studentDetails: StudentDetail[];
}