import { Component } from '@angular/core';
import { Repository } from "./models/repository";
import { Student } from "./models/Student";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	constructor(private repo: Repository) { }

	get student(): Student {
		return this.repo.student;
	}
}
