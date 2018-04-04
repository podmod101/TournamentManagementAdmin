import { StudentTournamentDetail } from "./StudentTournamentDetail";
import { Tournament } from "./Tournament";
import { ShootDay } from "./ShootDay";
import { School } from "./School";


export class SchoolTournamentDetail {
	constructor(
		schoolTournamentDetailId?: number,
		comment?: string,
		createDate?: Date,
		shootDayId?: number,
		shootTime?: any,
		schoolId?: number,
		tournamentId?: number,
		school?: School,
		shootDay?: ShootDay,
		tournament?: Tournament) { };
	}
