import { Division } from "./Division";
import { Level } from "./Level";
import { School } from "./School";
import { Sector } from "./Sector";


export class SchoolDetail {
	constructor(
		schoolDetailId?: number,
		createDate?: Date,
		divisionId?: number,
		levelId?: number,
		schoolId?: number,
		sectorId?: number,
		division?: Division,
		level?: Level,
		school?: School,
		sector?: Sector) { };
	}
