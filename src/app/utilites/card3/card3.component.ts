import { Component, Input, OnInit } from '@angular/core';
import {RecomendedcommunityServiceService} from '../../utilities/recomendedcommunity-service.service'
@Component({
  selector: 'app-card3',
  templateUrl: './card3.component.html',
  styleUrls: ['./card3.component.css']
})
export class Card3Component implements OnInit {
@Input()   recommendedCommunities
  constructor(private service:RecomendedcommunityServiceService) { }

  ngOnInit(): void {
    this.service.getRecomendedCommunity().subscribe(data=>{
      console.log(data)
      this.recommendedCommunities=data;
    })
  }

}
