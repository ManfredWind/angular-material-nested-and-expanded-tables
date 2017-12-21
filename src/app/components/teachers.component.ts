import { Component, Input, OnInit } from '@angular/core';
import { Teacher } from '../model/teacher';
import { MatTable, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'teachers',
  templateUrl: './teachers.component.html'
})

export class TeachersComponent implements OnInit {

  @Input() teachers : Teacher[];
  @Input() displayHeading : boolean = false;
  displayedColumns = ['name','language', 'availability'];
  dataSource : MatTableDataSource<Teacher>;

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.teachers);
  }

}
