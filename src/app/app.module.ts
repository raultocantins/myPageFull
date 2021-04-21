import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppbarComponent } from './components/template/appbar/appbar.component';
import { AboutsectionComponent } from './components/template/aboutsection/aboutsection.component';
import { MyservicesComponent } from './components/template/myservices/myservices.component';
import { CountprojectsComponent } from './components/template/countprojects/countprojects.component';

@NgModule({
  declarations: [
    AppComponent,
    AppbarComponent,
    AboutsectionComponent,
    MyservicesComponent,
    CountprojectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
