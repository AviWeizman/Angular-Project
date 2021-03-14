import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import {Users} from '../users';
import {Tasks} from '../tasks';
import {Posts} from '../posts';
import {UserutilsService} from '../userutils.service'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-postsandtasks',
  templateUrl: './postsandtasks.component.html',
  styleUrls: ['./postsandtasks.component.css']
})
export class PostsandtasksComponent implements OnInit {
  @Input()
  showuser : any;
  newtask : Tasks = {title : null, completed : false};
  newposts : Posts = {title : null, body : null};
  newtaskfocus : boolean = false;
  newpostfocus : boolean = false;
  subonput : Subscription;
  subonget : Subscription;

  constructor(private utils : UserutilsService, private router : Router) { }

  addtask()
  {
  
    if(this.newposts.title!=null && this.newposts.body!=null)
    {
      this.showuser.Posts.push(this.newposts)
      this.subonput = this.utils.putUser(this.showuser._id, this.showuser).subscribe(data => {
        console.log(data)
        this.subonget = this.utils.getUser(this.showuser._id).subscribe(refresh => this.showuser=refresh)
      })}
  }
  addPost()
  {
    if(this.newposts.title!=null && this.newposts.body!=null)
    {
      this.showuser.Posts.push(this.newposts)
      this.subonput = this.utils.putUser(this.showuser._id, this.showuser).subscribe(data => {
        console.log(data)
        this.subonget = this.utils.getUser(this.showuser._id).subscribe(refresh => this.showuser=refresh)
      })
      
    }
  }

  

  ngOnInit(): void {
  }
  ngOnDestroy()
  {
    this.subonput.unsubscribe();
    this.subonget.unsubscribe();



  }

}
