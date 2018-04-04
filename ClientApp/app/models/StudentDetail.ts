import { County } from "./County";
import { Grade } from "./Grade";
import { Student } from "./Student";
import { School } from "./School";


export class StudentDetail {
	constructor(
		studentDetailId?: number,
		countyId?: number,
		gradeId?: number,
		schoolId?: number,
		studentId?: number,
		address?: string,
		address2?: string,
		city?: string,
		createDate?: Date,
		state?: string,
		zip?: string,
		county?: County,
		grade?: Grade,
		school?: School,
		student?: Student ) { };
	}
