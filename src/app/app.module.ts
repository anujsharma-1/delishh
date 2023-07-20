import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';
import { MyitemComponent } from './myitem/myitem.component';
import { EveryComponent } from './every/every.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CardsComponent,
    CartComponent,
    DetailsComponent,
    MyitemComponent,
    EveryComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{path : "", component : HomeComponent}, 
    {path : "cart", component : CartComponent},
     {path : "details/:name", component : DetailsComponent}, 
     {path : "myitem/:ord", component : MyitemComponent}, 
     {path : "every/:itemId", component : EveryComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
