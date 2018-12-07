import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './feature/dashboard/dashboard.component';
import { HttpHelperService } from './core/services/http-helper.service';
import { SearchbytitlePipe } from './shared-component/pipes/searchbytitle.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchbytitlePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HttpHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
