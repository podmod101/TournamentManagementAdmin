import { Student } from "./Student";

export class Repository {
	constructor() {
		this.student = JSON.parse(document.getElementById("data").textContent);
	}

	student: Student;
}