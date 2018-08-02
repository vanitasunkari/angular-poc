import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import {UserServiceService} from './users-list/user-service.service';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
