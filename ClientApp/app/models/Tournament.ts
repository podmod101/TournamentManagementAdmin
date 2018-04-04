import { SchoolTournamentDetail } from "./SchoolTournamentDetail";
import { StudentTournamentDetail } from "./StudentTournamentDetail";


export class Tournament {
	constructor(
		tournamentId?: number,
		address?: string,
		city?: string,
		endDate?: Date,
		location?: string,
		name?: string,
		startDate?: Date,
		state?: string,
		stateChampionship?: boolean,
		zip?: string,
		schoolTournamentDetail?: SchoolTournamentDetail[],
		studentTournamentDetail?: StudentTournamentDetail[]) { };
	}
