import { Component } from '@angular/core';
import { Repository } from "./models/repository";
import { ModelModule } from "./models/model.module";

import { Student } from "./models/Student";
import { StudentDetail } from './models/StudentDetail';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(private repo: Repository) { }

	get student(): Student { return this.repo.student; }
	get students(): Student[] { return this.repo.students; }

	get studentDetail(): StudentDetail { return this.repo.studentDetail; }
	get studentDetails(): StudentDetail[] { return this.repo.studentDetails; }
}
