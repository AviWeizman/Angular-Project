import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import {Users} from '../users';
import {UserutilsService} from '../userutils.service';
import {Tasks} from '../tasks';
import {Posts} from '../posts';
import {Router} from '@angular/router'


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  
  newuser : Users = 
  {
    Name : null,
    Email : null,
    Street : null,
    City : null,
    Zipcode : null,
    Tasks : [],
    Posts : []
  }
  sub : Subscription;
  constructor(private utils : UserutilsService,private router : Router) { }

  adduser()
  {
    if(this.newuser.Name !=null && this.newuser.Email !=null)
    {
      this.sub = this.utils.postUser(this.newuser)
      .subscribe(data=>
        {
          console.log(data)
          window.location.reload()
        })
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy()
  {
    this.sub.unsubscribe();
  }

}
