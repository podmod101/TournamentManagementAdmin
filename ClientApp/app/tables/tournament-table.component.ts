import { Repository } from "../models/repository";
import { Tournament } from "../models/Tournament";
import { Component } from "@angular/core";

@Component({
	selector: "tournament-table",
	templateUrl: "./tournament-table.component.html"
})
export class TournamentTableComponent {
	constructor(private repo: Repository) { }

	get tournament(): Tournament { return this.repo.tournament; }
	get tournaments(): Tournament[] { return this.repo.tournaments; }
}