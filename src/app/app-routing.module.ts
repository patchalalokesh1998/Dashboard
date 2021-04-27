import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommunityprofileProfileComponent} from './utilites/communityprofile-profile/communityprofile-profile.component';
import {CommunityprofileChartsComponent} from './utilites/communityprofile-charts/communityprofile-charts.component';
import {MarketplaceComponent} from './utilites/marketplace/marketplace.component';
import { MembersComponent } from './utilites/members/members.component';
import { SettingsComponent } from './utilites/settings/settings.component';
import { CommunityprofileComponent } from './utilites/communityprofile/communityprofile.component';
import {DailynickelComponent} from './components/dailynickel/dailynickel.component';
import {ProductdetailsComponent} from './utilites/productdetails/productdetails.component';
import {SearchresultComponent} from './utilites/searchresult/searchresult.component';
import {LocationSearchComponent} from './utilites/location-search/location-search.component';
import {UserregistrationComponent} from './utilites/userregistration/userregistration.component'
import {CommunityaddComponent} from './utilites/communityadd/communityadd.component'



const routes: Routes = [
  { path: 'community', component: CommunityprofileComponent,
  children: [
   
    { path: 'profile', component: CommunityprofileProfileComponent },
    { path: 'charts', component: CommunityprofileChartsComponent },
    { path: 'marketplace', component: MarketplaceComponent },
    { path: 'members', component: MembersComponent },
    { path: 'settings', component: SettingsComponent },
    { path: '', redirectTo: 'profile', pathMatch: 'full' },
  ]
},
{
  path: 'dailynickel', component: DailynickelComponent
},
{
  path: 'productdetails', component: ProductdetailsComponent
},
{
  path: 'searchresult', component: SearchresultComponent
},
{
  path: 'locationsearch', component: LocationSearchComponent
},
{
  path: 'userregistration', component: UserregistrationComponent
},
{
  path: 'communityadd', component: CommunityaddComponent
},
{
  path:'', redirectTo:'dailynickel', pathMatch: 'full'
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// },
//   {
//     path:'profile',
//     component:CommunityprofileProfileComponent
//   },
//   {
//     path:'charts',
//     component:CommunityprofileChartsComponent
//   },
//   {
//     path:'marketplace',
//     component:MarketplaceComponent
//   },
//   {
//     path:'members',
//     component:MembersComponent
//   },
//   {
//     path:'settings',
//     component:SettingsComponent
//   },
//   {
//     path: '', pathMatch: 'full', redirectTo: '/profile'
//   }
// app-communityprofile-profile