import { StudentDetail } from "./StudentDetail";
import { StudentTournamentDetail } from "./StudentTournamentDetail";


export class Student {
	constructor (
		studentId?: number,
		customerNumber?: string,
		dateOfBirth?: Date,
		firstName?: string,
		gender?: string,
		huntingLicenseNumber?: string,
		lastFourSsn?: number,
		lastName?: string,
		middleInitial?: string,
		studentDetail?: StudentDetail[],
		studentTournamentDetail?: StudentTournamentDetail[] ) { };
}
