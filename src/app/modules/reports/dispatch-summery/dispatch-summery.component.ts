import { GlobalSharedService } from './../../../core/services/global-shared.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DispatchSummeryData } from '../model/TableDataModel';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { AppSettings } from '../../../app-constants/appSettings';
import { MatSort } from '@angular/material/sort';
import { DashboardService } from '../../dashboard/service/dashboard.service';

@Component({
  selector: 'app-dispatch-summery',
  templateUrl: './dispatch-summery.component.html',
  styleUrls: ['./dispatch-summery.component.css'],
})
export class DispatchSummeryComponent implements OnInit {
  xpandStatus: boolean = true;

  ELEMENT_DATA: DispatchSummeryData[] = [
    {
      customerCode: '1234',
      creditNoteNo: '1111',
      creditDate: '04/12/2024',
      grossAmount: 5.0,
      basicAmount: 0.0,
      CGST: 0.0,
      SCGST_UGST: 0.0,
      IGST: 0.0,
      GST_CESS: 0.0,
      narration: 'xxxx',
      invoiceNo: '1111',
      billDate: '05/12/2024',
      siteName: 'Mumbai',
    },
    {
      customerCode: '12345',
      creditNoteNo: '1111',
      creditDate: '04/12/2024',
      grossAmount: 5.0,
      basicAmount: 0.0,
      CGST: 0.0,
      SCGST_UGST: 0.0,
      IGST: 0.0,
      GST_CESS: 0.0,
      narration: 'xxxx',
      invoiceNo: '1111',
      billDate: '05/12/2024',
      siteName: 'Pune',
    },
    {
      customerCode: '12346',
      creditNoteNo: '1111',
      creditDate: '04/12/2024',
      grossAmount: 5.0,
      basicAmount: 0.0,
      CGST: 0.0,
      SCGST_UGST: 0.0,
      IGST: 0.0,
      GST_CESS: 0.0,
      narration: 'xxxx',
      invoiceNo: '1111',
      billDate: '05/12/2024',
      siteName: 'Mumbai',
    },
    {
      customerCode: '12347',
      creditNoteNo: '1111',
      creditDate: '04/12/2024',
      grossAmount: 5.0,
      basicAmount: 0.0,
      CGST: 0.0,
      SCGST_UGST: 0.0,
      IGST: 0.0,
      GST_CESS: 0.0,
      narration: 'xxxx',
      invoiceNo: '1111',
      billDate: '05/12/2024',
      siteName: 'Mumbai',
    },
    {
      customerCode: '12348',
      creditNoteNo: '1111',
      creditDate: '04/12/2024',
      grossAmount: 5.0,
      basicAmount: 0.0,
      CGST: 0.0,
      SCGST_UGST: 0.0,
      IGST: 0.0,
      GST_CESS: 0.0,
      narration: 'xxxx',
      invoiceNo: '1111',
      billDate: '05/12/2024',
      siteName: 'Mumbai',
    },
    {
      customerCode: '12349',
      creditNoteNo: '1111',
      creditDate: '04/12/2024',
      grossAmount: 5.0,
      basicAmount: 0.0,
      CGST: 0.0,
      SCGST_UGST: 0.0,
      IGST: 0.0,
      GST_CESS: 0.0,
      narration: 'xxxx',
      invoiceNo: '1111',
      billDate: '05/12/2024',
      siteName: 'Mumbai',
    },
    {
      customerCode: '123410',
      creditNoteNo: '1111',
      creditDate: '04/12/2024',
      grossAmount: 5.0,
      basicAmount: 0.0,
      CGST: 0.0,
      SCGST_UGST: 0.0,
      IGST: 0.0,
      GST_CESS: 0.0,
      narration: 'xxxx',
      invoiceNo: '1111',
      billDate: '05/12/2024',
      siteName: 'Mumbai',
    },
    {
      customerCode: '123411',
      creditNoteNo: '1111',
      creditDate: '04/12/2024',
      grossAmount: 5.0,
      basicAmount: 0.0,
      CGST: 0.0,
      SCGST_UGST: 0.0,
      IGST: 0.0,
      GST_CESS: 0.0,
      narration: 'xxxx',
      invoiceNo: '1111',
      billDate: '05/12/2024',
      siteName: 'Mumbai',
    },
    {
      customerCode: '123412',
      creditNoteNo: '1111',
      creditDate: '04/12/2024',
      grossAmount: 5.0,
      basicAmount: 0.0,
      CGST: 0.0,
      SCGST_UGST: 0.0,
      IGST: 0.0,
      GST_CESS: 0.0,
      narration: 'xxxx',
      invoiceNo: '1111',
      billDate: '05/12/2024',
      siteName: 'Mumbai',
    },
    {
      customerCode: '123413',
      creditNoteNo: '1111',
      creditDate: '04/12/2024',
      grossAmount: 5.0,
      basicAmount: 0.0,
      CGST: 0.0,
      SCGST_UGST: 0.0,
      IGST: 0.0,
      GST_CESS: 0.0,
      narration: 'xxxx',
      invoiceNo: '1111',
      billDate: '05/12/2024',
      siteName: 'Mumbai',
    },
    {
      customerCode: '123414',
      creditNoteNo: '1111',
      creditDate: '04/12/2024',
      grossAmount: 5.0,
      basicAmount: 0.0,
      CGST: 0.0,
      SCGST_UGST: 0.0,
      IGST: 0.0,
      GST_CESS: 0.0,
      narration: 'xxxx',
      invoiceNo: '1111',
      billDate: '05/12/2024',
      siteName: 'Mumbai',
    },
    {
      customerCode: '123415',
      creditNoteNo: '1111',
      creditDate: '04/12/2024',
      grossAmount: 5.0,
      basicAmount: 0.0,
      CGST: 0.0,
      SCGST_UGST: 0.0,
      IGST: 0.0,
      GST_CESS: 0.0,
      narration: 'xxxx',
      invoiceNo: '1111',
      billDate: '05/12/2024',
      siteName: 'Mumbai',
    },
  ];

  displayedColumns: string[] = [
    'customerCode',
    'creditNoteNo',
    'creditDate',
    'grossAmount',
    'basicAmount',
    'CGST',
    'SCGST_UGST',
    'IGST',
    'GST_CESS',
    'narration',
    'invoiceNo',
    'billDate',
    'siteName',
  ];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  columns: any[] = [
    {
      prop: 'customerCode',
      title: 'Customer Code',
    },
    {
      prop: 'creditNoteNo',
      title: 'Credit Note No.',
    },
    {
      prop: 'creditDate',
      title: 'Credit Date',
    },
    {
      prop: 'grossAmount',
      title: 'Gross Amount',
    },
    {
      prop: 'basicAmount',
      title: 'Basic Amount',
    },
    {
      prop: 'CGST',
      title: 'CGST',
    },
    {
      prop: 'SCGST_UGST',
      title: 'SCGST UGST',
    },
    {
      prop: 'IGST',
      title: 'IGST',
    },
    {
      prop: 'GST_CESS',
      title: 'GST CESS',
    },
    {
      prop: 'narration',
      title: 'Narration',
    },
    {
      prop: 'invoiceNo',
      title: 'Invoice No.',
    },
    {
      prop: 'billDate',
      title: 'Bill Date',
    },
    {
      prop: 'siteName',
      title: 'Site Name',
    },
  ];

  constructor(
    private titleSvc: Title,
    private globalSharedSrv: GlobalSharedService,
    private dashboardSrv: DashboardService
  ) {
    this.titleSvc.setTitle(AppSettings.applicationName + '- Dispatch Summery');
    this.globalSharedSrv.pageTitle.next('Dispatch Summery');
  }

  ngOnInit() {
    // this.getAllUsers();
  }

  getAllUsers() {
    this.dashboardSrv.getUserData().subscribe({
      next: (response) => {
        this.globalSharedSrv.checkErrorStatus(response);
        console.log('response ', response);
      },
      error: (error: any) => {
        console.log(error, 'Error in call');
      },
    });
  }
}
