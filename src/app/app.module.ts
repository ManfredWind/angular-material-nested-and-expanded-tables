import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SimpleTableComponent } from './components/simple/simple-table.component';
import { SimpleNestedTablesComponent } from './components/simple-nested/simple-nested-tables.component';
import { ExpandedNestedTablesComponent } from './components/expanded-nested/expanded-nested-tables.component';
import { FullyExpandedTablesComponent } from './components/fully-expanded/fully-expanded-tables.component';
import { TeachersComponent } from './components/teachers.component';

import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    SimpleTableComponent,
    SimpleNestedTablesComponent,
    ExpandedNestedTablesComponent,
    FullyExpandedTablesComponent,
    TeachersComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule
  ],
  exports : [ MatTableModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
