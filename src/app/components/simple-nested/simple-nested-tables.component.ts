import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../../model/course';
import { MatTable, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'simple-nested-tables',
  templateUrl: './simple-nested-tables.component.html'
})

export class SimpleNestedTablesComponent implements OnInit {

  @Input() courses : Course[];
  displayedColumns = ['name','deliveryMethod', 'price', 'teachers'];
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
