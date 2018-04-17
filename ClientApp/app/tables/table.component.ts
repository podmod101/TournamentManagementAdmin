import { Repository } from "../models/repository";

import { Student } from "../models/Student";
import { StudentDetail } from "../models/StudentDetail";
import { School } from "../models/School";
import { SchoolDetail } from "../models/SchoolDetail";

import { TableSwitch } from "./table-switch";
import { Component, Input } from "@angular/core";

import { StudentTableComponent } from "./student-table.component";
import { SchoolTableComponent } from "./school-table.component";
import { TournamentTableComponent } from "./tournament-table.component";

@Component({
	selector: "table-root",
	templateUrl: "./table.component.html"
})
export class TableComponent {
	constructor(private repo: Repository) { }
}

@Component({
	selector: 'student-table',
	template: 'student-table.component.html'
})
export class StudentCategory {
	@Input() tableSwitch: TableSwitch;
}

@Component({
	selector: 'school-table',
	template: 'school-table.component.html'
})
export class SchoolCategory {
	@Input() tableSwitch: TableSwitch;
}

@Component({
	selector: 'tournament-table',
	template: 'tournament-table.component.html'
})
export class TournamentCategory {
	@Input() tableSwitch: TableSwitch;
}

export const tableSwitchComponents = [StudentCategory, SchoolCategory, TournamentCategory];