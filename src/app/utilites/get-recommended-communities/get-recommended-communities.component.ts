import { Component, OnInit } from '@angular/core';
import {Input,Output} from '@angular/core';
import {RecomendedcommunityServiceService} from '../../utilities/recomendedcommunity-service.service'
@Component({
  selector: 'app-get-recommended-communities',
  templateUrl: './get-recommended-communities.component.html',
  styleUrls: ['./get-recommended-communities.component.css']
})
export class GetRecommendedCommunitiesComponent implements OnInit {
  recommendedCommunities:any;
  constructor(private service:RecomendedcommunityServiceService) { }

  ngOnInit(): void {
 
   }

}
