import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CommonModule } from '@angular/common';
import { DisplayService } from './display.service';

@NgModule({
  declarations: [
    
  ],
  imports: [
    AppComponent,
    UserComponent,
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [DisplayService],
  // bootstrap: [AppComponent,UserComponent],
})
export class AppModule { }
