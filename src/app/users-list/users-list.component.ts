import { Component, OnInit } from '@angular/core';
import {UserServiceService} from './user-service.service';
// import { SortEvent } from '../draggable/sortable-list.directive';
//import { InfiniteScrollModule } from 'ngx-infinite-scroll';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: any;
  constructor(private UserService: UserServiceService) { }

  ngOnInit() {
    this.UserService.retrieveData().subscribe(response =>{
      this.users = response;
    });
  }
  onScroll(){
    this.users = this.users.splice(0,this.users.length+3)
  }
/*  sort(event: SortEvent) {
    const current = this.users[event.currentIndex];
    const swapWith = this.users[event.newIndex];

    this.users[event.newIndex] = current;
    this.users[event.currentIndex] = swapWith;
  }*/
}
