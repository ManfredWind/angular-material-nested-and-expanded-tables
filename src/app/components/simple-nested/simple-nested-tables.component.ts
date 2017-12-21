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
    this.dataSource = new MatTableDataSource(this.courses);
  }

}
