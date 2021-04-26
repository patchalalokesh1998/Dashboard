import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
searchtext:string;
 members=[
   {
     name:"lokesh",
     cityname:'vizag'
   },
   {
     name:"lokesh2",
     cityname:'vizag'
   },
   {
    name:"lokesh",
    cityname:'vizag'
  },
  {
    name:"lokesh2",
    cityname:'vizag'
  },
  {
    name:"lokesh",
    cityname:'vizag'
  },
  {
    name:"lokesh2",
    cityname:'vizag'
  }
 ]

  constructor() { }

  ngOnInit(): void {
  }

}
