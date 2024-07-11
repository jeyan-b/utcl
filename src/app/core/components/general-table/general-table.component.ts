import { AfterViewInit, Component, Input, OnChanges, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { GeneralTableDataSource, GeneralTableItem } from './general-table-datasource';

export interface PeriodicElement {
  position: number;
  name: string;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-general-table',
  templateUrl: './general-table.component.html',
  styleUrl: './general-table.component.scss'
})
export class GeneralTableComponent implements AfterViewInit, OnChanges {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<any>;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  @Input() displayedColumns: any[] = [];
  dataSource: any;
  @Input() columns:any[] = [];
  // @Input() ELEMENT_DATA: PeriodicElement[] = [
  //   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  //   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  //   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  //   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  //   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  //   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  //   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  //   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  //   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  //   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  // ];

  @Input() ELEMENT_DATA:any[] = [];

  constructor(){
    // this.columns  = [
    //   {
    //     prop:"position",
    //     title:"Position"
    //   },
    //   {
    //     prop:"name",
    //     title:"Name"
    //   },
    //   {
    //     prop:"weight",
    //     title:"Weight"
    //   },
    //   {
    //     prop:"symbol",
    //     title:"Symbol"
    //   }
    // ]


  }

  ngOnChanges(){
    console.log("columns ",this.columns);
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    this.displayedColumns = this.columns.map(col => col.prop);
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
