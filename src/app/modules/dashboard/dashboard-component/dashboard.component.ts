import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import Chart, { plugins } from 'chart.js/auto';
import * as data from '../../../../assets/config/salesdata.json';
import { AppSettings } from '../../../app-constants/appSettings';
import { GlobalSharedService } from '../../../core/services/global-shared.service';
import { DashboardService } from '../service/dashboard.service';
import { ChartDetailComponent } from '../../../core/components/chart-detail/chart-detail.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  datas: any;
  salesBarDatas: any;
  selected = 'volvo';
  constructor(
    private globalSharedSrv: GlobalSharedService,
    private _dialog: MatDialog,
    private titleSvc: Title,
    private dashboardSrv: DashboardService
  ) {
    this.titleSvc.setTitle(AppSettings.applicationName + '- Dashboard');
    this.globalSharedSrv.pageTitle.next('Dashboard');
  }

  salesData: any;
  labelData: any[] = [];
  labelUData: any[] = [];
  realData: any[] = [];
  realUData: any[] = [];
  colorData: any[] = [];
  salesBarData: any;
  labelBarData: any[] = [];
  realBarData: any[] = [];
  colorBarData: any[] = [];
  delayed: any;
  utclSalesData: any;

  ngOnInit() {
    // this.getAllUsers();
    this.fetchChartData();
    this.addChartData();
    this.renderLineChart();
    this.renderChart(
      this.labelData,
      this.realData,
      this.colorData,
      'bar',
      'barchart'
    );
    this.renderPieChart(
      this.labelData,
      this.realData,
      this.colorData,
      'pie',
      'piechart'
    );
    this.renderPieChart(
      this.labelData,
      this.realData,
      this.colorData,
      'doughnut',
      'dochart'
    );
    this.renderChart(
      this.labelData,
      this.realData,
      this.colorData,
      'polarArea',
      'pochart'
    );
    this.renderChart(
      this.labelData,
      this.realData,
      this.colorData,
      'radar',
      'radarchart'
    );
    this.renderChart(
      this.labelData,
      this.realData,
      this.colorData,
      'bar',
      'barchart1'
    );
    // this.callToAPI();
  }

  renderPieChart(
    labelUData: any,
    realUData: any,
    colordata: any,
    type: any,
    id: any
  ) {
    const myChart = new Chart(id, {
      type: type,
      data: {
        labels: this.labelUData,
        datasets: [
          {
            label: '',
            data: this.realUData,
            borderWidth: 1,
          },
        ],
      },
      options: {
        // onClick: function (evt, item) {

        //   console.log('legend onClick', evt);
        //   console.log('legd item', item);
        // },
        onclick:(evt,chartElements)=>{
          if(chartElements && chartElements.length >0){
            this.openDialog(chartElements[0])
            console.log(chartElements[0])
          }
        },
        tooltips: {
          callbacks: function (tooltipItem, data) {
            var value = data.datasets[0].data[tooltipItem.index];
            console.log(value);
            if (value) {
              return value.toString().replace(/\,/g,'');
            } else {
              return value;
            }
          },
        },

        animation: {
          onComplete: () => {
            delayed: true;
          },
          delay: (context) => {
            let delay = 0;
            if (context.type === 'data' && context.mode == 'default') {
              delay = context.dataIndex * 300;
            }
            return delay;
          },
        },
        maintainAspectRatio: false,
        plugins: {
          legend: false, // Hide legend
        },
        scales: {
          y: {
            // display: true // Hide Y axis labels
            beginAtZero: true,
            ticks: {
              callback: function (value, index, ticks) {
                return value * 1000;
              },
            },
          },
          x: {
            display: true, // Hide X axis labels,
          },
        },
      },
    });
  }

  graphClickEvent(event, array) {
    if (array[0]) {
    }
  }

  renderChart(
    labelData: any,
    realData: any,
    colordata: any,
    type: any,
    id: any
  ) {
    const myChart = new Chart(id, {
      type: type,
      data: {
        labels: labelData,
        datasets: [
          {
            label: '',
            data: realData,
            borderWidth: 1,
          },
        ],
      },
      options: {
        animation: {
          onComplete: () => {
            delayed: true;
          },
          delay: (context) => {
            let delay = 0;
            if (context.type === 'data' && context.mode == 'default') {
              delay = context.dataIndex * 300;
            }
            return delay;
          },
        },
        maintainAspectRatio: false,
        plugins: {
          legend: false, // Hide legend
        },
        scales: {
          y: {
            // display: true // Hide Y axis labels
            beginAtZero: true,
          },
          x: {
            display: true, // Hide X axis labels
          },
        },
      },
    });
  }

  renderDoughnutChart(
    labelData: any,
    realData: any,
    colordata: any,
    type: any,
    id: any
  ) {
    const ShadowPlugin = {
      id: 'ShadowPlugin',
      beforeDraw: (chart, args, options) => {
        const { ctx } = chart;
        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
        ctx.shadowBlur = 10;

        ctx.shadowOffsetX = 5;
        ctx.shadowOffsetY = 5;
      },
    };

    const myChart = new Chart(id, {
      type: type,
      data: {
        labels: labelData,
        datasets: [
          {
            label: '',
            data: realData,
            borderWidth: 1,
          },
        ],
      },
      options: {
        animation: {
          onComplete: () => {
            delayed: true;
          },
          delay: (context) => {
            let delay = 0;
            if (context.type === 'data' && context.mode == 'default') {
              delay = context.dataIndex * 300;
            }
            return delay;
          },
        },
        maintainAspectRatio: false,
        plugins: {
          legend: false, // Hide legend
        },
        scales: {
          y: {
            // display: true // Hide Y axis labels
            beginAtZero: true,
          },
          x: {
            display: true, // Hide X axis labels
          },
        },
      },
      plugins: [ShadowPlugin],
    });
  }

  renderLineChart() {
    var data = {
      labels: ['1', '2', '3', '4', '5'],
      datasets: [
        {
          label: 'TeamA Score',
          data: [10, 50, 25, 70, 40],
          backgroundColor: 'blue',
          borderColor: 'lightblue',
          fill: false,
          lineTension: 0,
          radius: 5,
        },
        {
          label: 'TeamB Score',
          data: [20, 35, 40, 60, 50],
          backgroundColor: 'green',
          borderColor: 'lightgreen',
          fill: false,
          lineTension: 0,
          radius: 5,
        },
      ],
    };

    //options
    var options = {
      animation: {
        onComplete: () => {
          delayed: true;
        },
        delay: (context) => {
          let delay = 0;
          if (context.type === 'data' && context.mode == 'default') {
            delay = context.dataIndex * 300;
          }
          return delay;
        },
      },

      responsive: true,

      title: {
        display: true,
        position: 'top',
        text: 'Line Graph',
        fontSize: 18,
        fontColor: '#111',
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    };

    var chart = new Chart('linechart', {
      type: 'line',
      data: data,
      options: options,
    });
  }

  openDialog(id: any) {
    this._dialog.open(ChartDetailComponent, {
      width: '910px',
      height: '290px',
      data: {
        id: id,
        salesData: this.datas,
        utclData: this.utclSalesData,
      },
    });
  }

  callToAPI() {
    let reqParam = 'Rashi';
    this.dashboardSrv.callTempSrv(reqParam).subscribe({
      next: (response) => {
        console.log('response ', response);
      },
      error: (error) => {
        console.log('error ', error);
      },
    });
  }

  addChartData() {
    for (let i = 0; i < this.datas.length; i++) {
      this.labelData.push(this.datas[i].year);
      this.realData.push(this.datas[i].amount);
      this.colorData.push(this.datas[i].colorcode);
    }
    for (let i = 0; i < this.utclSalesData.length; i++) {
      this.labelUData.push(this.utclSalesData[i].type);
      this.labelUData.push(this.utclSalesData[i].type);
      this.realUData.push(this.utclSalesData[i].Cement);
      this.realUData.push(this.utclSalesData[i].UBS);

      console.log(this.labelUData);
      console.log(this.realUData);
    }
  }

  fetchChartData() {
    this.datas = (data as any).default.sales;
    this.salesBarDatas = (data as any).default.salesBar;
    this.utclSalesData = (data as any).default.utclSales;
  }

  // Rajashree code

  getAllUsers() {
    this.dashboardSrv.getUserData().subscribe({
      next: (response) => {
        this.globalSharedSrv.checkErrorStatus(response);
        console.log('response in dashboard ', response);
      },
      error: (error: any) => {
        console.log(error, 'Error in call');
      },
    });
  }
}
