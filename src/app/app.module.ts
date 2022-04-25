import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { TopInfoBoxComponent } from './components/top-info-box/top-info-box.component';
import { BottomInfoBoxComponent } from './components/bottom-info-box/bottom-info-box.component';

@NgModule({
  declarations: [
    AppComponent,
    TopInfoBoxComponent,
    BottomInfoBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
