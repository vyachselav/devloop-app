import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GoodsComponent } from './goods/goods.component';
import { GoodDetailComponent } from './good-detail/good-detail.component';
import { GoodPreviewComponent } from './good-preview/good-preview.component';

import { AppRoutingModule } from './app-routing.module';

import { CoffeeshopComponent } from './coffeeshop/coffeeshop.component';
import { CoffeeshopDetailComponent } from './coffeeshop/coffeeshop-detail.component';
import { CoffeeshopService } from './coffeeshop/coffeeshop.service';

import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    GoodsComponent,
    GoodDetailComponent,
    GoodPreviewComponent,
    CoffeeshopComponent,
    CoffeeshopDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    JsonpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDugtHKAPtdKpSNJiDQYUJXEHH6hjoBRWg'
    })
  ],
  providers: [ CoffeeshopService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
