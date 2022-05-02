import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { MyskillsComponent } from './myskills/myskills.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    IntroductionComponent,
    MyskillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
