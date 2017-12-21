import { Component } from '@angular/core';
import { Course } from './model/course';
import { Teacher } from './model/teacher';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses : Course[];

  constructor() {
    this.courses = require('../assets/courses.json');
  }

}
