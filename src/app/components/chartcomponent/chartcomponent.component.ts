import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from "chart.js";
import { Color, Label } from "ng2-charts";
@Component({
  selector: 'app-chartcomponent',
  templateUrl: './chartcomponent.component.html',
  styleUrls: ['./chartcomponent.component.css']
})
export class ChartcomponentComponent implements OnInit {


  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: "Series A" },
    { data: [20, 20, 10, 10, 10, 20, 40], label: "Series B" }
  ];
  public lineChartLabels: Label[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July"
  ];
  // public lineChartOptions: ChartOptions & { annotation: any } = {
  //   responsive: true
  // };
  public lineChartColors: Color[] = [
    {
      borderColor: "black",
      backgroundColor: "rgba(255,0,0,0.3)",
      
    }
  ];
  public lineChartLegend = true;
  public lineChartType = "line";
  public barChartType = 'bar';
  public lineChartPlugins = [];
  // public options: {
  //   maintainAspectRatio: false,
  //   plugins: {
  //     datalabels: {
  //       color: 'red'
  //     }
  //   };

  constructor() { }

  ngOnInit(): void {
  }

}
