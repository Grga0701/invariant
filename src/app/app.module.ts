import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TimwebComponent } from './timweb/timweb.component';
import { FormsModule } from '@angular/forms';



@NgModule({
   declarations: [
      AppComponent,
      ListComponent,
      NavigationComponent,
      TimwebComponent
   ],
   imports: [
	 BrowserModule,
	 AppRoutingModule,
    FormsModule
	],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
