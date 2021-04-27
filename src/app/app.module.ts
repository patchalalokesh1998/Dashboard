import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoMaterialModule } from './materials-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './components/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChartcomponentComponent } from './components/chartcomponent/chartcomponent.component';
import { BrandcardComponent } from './components/brandcard/brandcard.component';
import { LogincomponentComponent } from './components/logincomponent/logincomponent.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NetflexComponent } from './components/netflex/netflex.component';
import { SalesforcedataComponent } from './components/salesforcedata/salesforcedata.component';
import { DailynickelComponent } from './components/dailynickel/dailynickel.component';
import { CardComponent } from './utilites/card/card.component';
import { FooterComponent } from './utilites/footer/footer.component';
import { HeaderComponent } from './utilites/header/header.component';
import { CarouselComponent } from './utilites/carousel/carousel.component';
import { ProductdetailsComponent } from './utilites/productdetails/productdetails.component';
import { SearchresultComponent } from './utilites/searchresult/searchresult.component';
import { NouisliderModule } from 'ng2-nouislider';
import { LocationSearchComponent } from './utilites/location-search/location-search.component';
import { UserregistrationComponent } from './utilites/userregistration/userregistration.component';
import { CommunityprofileComponent } from './utilites/communityprofile/communityprofile.component';
import { CommunityprofileProfileComponent } from './utilites/communityprofile-profile/communityprofile-profile.component';
import { CommunityprofileChartsComponent } from './utilites/communityprofile-charts/communityprofile-charts.component';
import { MarketplaceComponent } from './utilites/marketplace/marketplace.component';
import { Card2Component } from './utilites/card2/card2.component';
import { MembersComponent } from './utilites/members/members.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SettingsComponent } from './utilites/settings/settings.component';
import { MeetnowComponent } from './utilites/meetnow/meetnow.component';
import { RequestedmeetingComponent } from './utilites/requestedmeeting/requestedmeeting.component';
import { CommunityaddComponent } from './utilites/communityadd/communityadd.component';
import { DateconpipePipe } from './pipes/dateconpipe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DashboardComponent,
    ChartcomponentComponent,
    BrandcardComponent,
    LogincomponentComponent,
    NetflexComponent,
    SalesforcedataComponent,
    DailynickelComponent,
    CardComponent,
    FooterComponent,
    HeaderComponent,
    CarouselComponent,
    ProductdetailsComponent,
    SearchresultComponent,
    LocationSearchComponent,
    UserregistrationComponent,
    CommunityprofileComponent,
    CommunityprofileProfileComponent,
    CommunityprofileChartsComponent,
    MarketplaceComponent,
    Card2Component,
    MembersComponent,
    SettingsComponent,
    MeetnowComponent,
    RequestedmeetingComponent,
    CommunityaddComponent,
    DateconpipePipe
  ],
  imports: [
    NouisliderModule,
    BrowserModule,
    AppRoutingModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    ChartsModule,
    ProgressbarModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
