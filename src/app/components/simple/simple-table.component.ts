import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../../model/course';
import { MatTable, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'simple-table',
  templateUrl: './simple-table.component.html'
})

export class SimpleTableComponent implements OnInit {

  @Input() courses : Course[];
  displayedColumns = ['name','deliveryMethod', 'price'];
  dataSource : MatTableDataSource<Course>;

  ngOnInit() {
    if (this.areCoursesValid(this.courses)) {
      this.dataSource = new MatTableDataSource(this.courses);
    }

  }

  areCoursesValid(courses : Course[]) : boolean {
    return typeof courses != "undefined" && courses != null && courses.length > 0;
  }

}
