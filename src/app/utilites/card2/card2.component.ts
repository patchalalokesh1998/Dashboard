import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit {
  @Input() community:any;
  constructor() { }

  ngOnInit(): void {
    // console.log(this.community);
  }

}
