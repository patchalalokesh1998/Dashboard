import { Component, OnInit } from '@angular/core';


import {SericeService} from '../../services/serice.service';
@Component({
  selector: 'app-netflex',
  templateUrl: './netflex.component.html',
  styleUrls: ['./netflex.component.css']
})
export class NetflexComponent implements OnInit {

  constructor(private service:SericeService) { }
   graph1data:any=[];
    graph1labels:any=[];
     graph1result:any=[];

  ngOnInit(): void {
  //  this.chartinit();
   this.getgraph1();

  }
  getgraph1()
  {
  this.service.getgraph1().subscribe(
  data => { const list = data.split('\n');
  list.forEach( e =>{ this.graph1data.push(e.trim());
  });
  //console.log(list);
  this.graph1data.shift();
  console.log(this.graph1data);
  this.setgraph1(this.graph1data);

 })
  }
  setgraph1(data)
  {
    
    this.graph1labels=[...new Set(data)];
    console.log(this.graph1labels);
    for(let i=0;i<this.graph1labels.length; i++)
    {
      let temp=data.filter(x=>x==this.graph1labels[i]).length;
      this.graph1result.push(temp);
      temp=0;
    }
    console.log(this.graph1result);
    

    console.log(this.graph1result);
    console.log(data)
    this.chartinit(this.graph1labels,this.graph1result);
    
  }

  chartinit(labels, result)
  {
    let backgroundColor:any=[];
    for(let i=0;i<labels.length;i++)
    {
      backgroundColor.push('#'+Math.floor(Math.random()*16777215).toString(16));
    }
    // '#'+Math.floor(Math.random()*16777215).toString(16)
    var ctx = document.getElementById('myChart')
//     var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: labels,
//         datasets: [{
//             label: '',
//             data: result,
//             backgroundColor:backgroundColor,
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });
  }
}
