import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardNubankComponent } from './svg-animations/card-nubank/card-nubank.component';
import { LoginComponent } from './svg-animations/login/login.component';
import { SvgatorComponent } from './svg-animations/svgator/svgator.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent, 
    CardNubankComponent,
    LoginComponent,
    SvgatorComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
