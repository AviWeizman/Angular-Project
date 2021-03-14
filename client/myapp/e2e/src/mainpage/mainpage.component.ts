import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Subscription} from 'rxjs';
import { Users } from '../users';
import { UserutilsService } from '../userutils.service';
import {Posts} from '../posts';
import {Tasks} from '../tasks'


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  sub : Subscription;
  users : Users[] = [];
  searchUser : string;
  tasksAndposts : boolean = false;
  newUser : boolean = false;
  currentUser : Users = new Users;
   
  

  constructor(private utils : UserutilsService, private router : Router) { }

  


  visibleTasksPosts(user : Users, show: boolean)
  { 
    this.tasksAndposts = !this.tasksAndposts;
    this.currentUser = user;
    this.newUser = false;
  }


  addNewUser()
  {
    this.tasksAndposts = false;
    this.newUser = !this.newUser;

  }

   async searchfor()
  {
   this.users = await this.utils.findUser(this.searchUser);
  
  }

  ngOnInit(): void {
    this.sub = this.utils.getallusers().subscribe(data => this.users = data);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}