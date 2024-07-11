import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as data from '../../../../assets/config/salesdata.json';
import Chart, { plugins } from 'chart.js/auto';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-chart-detail',
  templateUrl: './chart-detail.component.html',
  styleUrl: './chart-detail.component.scss',
})
export class ChartDetailComponent implements OnInit {
  salesData: any;

  utclSalesData: any;
  chartId: any;
  salesBarData: any;
  datas: any;
  salesBarDatas: any;

  ELEMENT_DATA_Cement: any[] = [
    {
      date: 'Net Sale',
      NetSaleDepot: 22510.8,
      NetSaleFactory: 55199.99,
      TotalNetSale: 77710.79,
    },
    {
      date: 'RMC Sale',
      NetSaleDepot: 126.86,
      NetSaleFactory: 653.16,
      TotalNetSale: 780.02,
    },
    {
      date: 'Other Depot Sale to Dhule',
      NetSaleDepot: 0,
      NetSaleFactory: 12.0,
      TotalNetSale: 12.0,
    },
    {
      date: 'Stock Transfer frm Nasik to Aurangabad',
      NetSaleDepot: 104.0,
      NetSaleFactory: 0.0,
      TotalNetSale: 104.0,
    },
  ];
  ELEMENT_DATA_UBS: any[] = [
    {
      date: 'UBS Allied Sale',
      quantity: 517,
      total: 133597.8,
    },
    {
      date: 'UBS Steel Sale',
      quantity: 80.6,
      total: 4029881.18,
    },
  ];

  dataSource = new MatTableDataSource(this.ELEMENT_DATA_Cement);
  dataSource_s= new MatTableDataSource(this.ELEMENT_DATA_UBS);
  displayedColumns: string[] = [
    'date',
    'NetSaleDepot',
    'NetSaleFactory',
    'TotalNetSale'

  ];
  displayedColumns_UBS: string[] = [
    'date',
    'quantity',
    'total'

  ];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.datas = (data as any).default.sales;
    this.salesBarDatas = (data as any).default.salesBar;
    this.utclSalesData = (data as any).default.utclSales;
    this.salesData = this.data.salesData;
    this.utclSalesData = this.data.utclData;
    // this.chartId = this.data.id;
    console.log(this.utclSalesData);
    console.log(this.salesData);
    console.log(this.chartId);
  }
}
