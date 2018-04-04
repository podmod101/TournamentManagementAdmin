import { County } from "./County";
import { CoachDetail } from "./CoachDetail";
import { SchoolDetail } from "./SchoolDetail";
import { SchoolTournamentDetail } from "./SchoolTournamentDetail";
import { StudentDetail } from "./StudentDetail";


export class School {
	constructor(
		schoolId?: number,
		address?: string,
		address2?: string,
		city?: string,
		countyId?: number,
		name?: string,
		state?: string,
		zip?: string,
		county?: County,
		coachDetail?: CoachDetail[],
		schoolDetail?: SchoolDetail[],
		schoolTournamentDetail?: SchoolTournamentDetail[],
		studentDetail?: StudentDetail[]) { };
}
