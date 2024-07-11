import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import Chart from 'chart.js/auto';
import { SalesData } from '../../../core/models/sales.model';

@Component({
  selector: 'app-chart-detail',
  templateUrl: './chart-detail.component.html',
  styleUrl: './chart-detail.component.scss',
})
export class ChartDetailComponent implements OnInit {
  salesData: any;
  labelData: any[] = [];
  realData: any[] = [];
  colorData: any[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.salesData = data.salesData;
  }

  ngOnInit(): void {
    for (let i = 0; i < this.salesData.length; i++) {
   
      this.labelData.push(this.salesData[i].year);
      this.realData.push(this.salesData[i].amount);
      this.colorData.push(this.salesData[i].colorcode);
    }

    this.renderChart(
      this.labelData,
      this.realData,
      this.colorData,
      'bar',
      'barchart'
    );
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
            label: '# of sales',
            data: realData,
            borderWidth: 1,
            backgroundColor: colordata,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
