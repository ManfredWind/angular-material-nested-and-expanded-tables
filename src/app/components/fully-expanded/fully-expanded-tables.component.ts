import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../../model/course';
import { MatTable, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'fully-expanded-tables',
  templateUrl: './fully-expanded-tables.component.html'
})

export class FullyExpandedTablesComponent implements OnInit {

  @Input() courses : Course[];
  displayedColumns = ['name','deliveryMethod', 'price'];
  dataSources : MatTableDataSource<Course>[];

  ngOnInit() {
    if (this.areCoursesValid(this.courses)) {
      this.dataSources = new  Array<MatTableDataSource<Course>>();
      for (let course of this.courses) {
        this.setDataSources(course);
      }
    }

  }

  private setDataSources(course : Course) {
    let courses = new Array<Course>();
    courses.push(course);
    this.dataSources.push(new MatTableDataSource(courses));
  }

  areCoursesValid(courses : Course[]) : boolean {
    return typeof courses != "undefined" && courses != null && courses.length > 0;
  }

}
