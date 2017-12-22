# Angular 5 Material Nested And Expanded Tables

This is an example of different approaches to display tabular data using Angular 5 Material.

Let's say you have the following JSON object and you are required to display it as a table:


```
[
  {
    "co1": "value",
    "col2": "value",
    "col3": "value",
    "subCols": [
      {
        "co1": "value",
        "col2": "value",
        "col3": "value"
      }
    ]
  }
]
```

Displaying a simple Angular Material table with a nested table for "subCols" should be very easy.

On the other hand, expanded tables are a bit tricky, they may seem nested but they really aren't. In my opinion it's a nicer approach because they provide better user experience and more custom CSS flexibility (especially the fully-expanded). The only thing is that you'll need a bit more code to make them work.

Peek:

- Simple table:

![Alt text](simple-table.png?raw=true "Simple Table Angular 5 Material")

- Simple-Nested table:

![Alt text](simple-nested-table.png?raw=true "Simple-Nested Table Angular 5 Material")

- Expanded-Nested table:

![Alt text](expanded-nested-table.png?raw=true "Expanded-Nested Table Angular 5 Material")

- Fully-Expanded table:

![Alt text](fully-expanded-table.png?raw=true "Fully-Nested Table Angular 5 Material")
