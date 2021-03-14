import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import {Users} from '../users';
import {UserutilsService} from '../userutils.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user : any = {};
  moreInfo : boolean = false;
  subonput : Subscription;
  subondelete : Subscription;
  subonget : Subscription;

  constructor(private utils : UserutilsService) { }

  info()
  {
    this.moreInfo = true;
  }

  closeInfo()
  {
    this.moreInfo = false;
  }

  updateUser()
  {
    this.subonput = this.utils.putUser(this.user.id,this.user)
    .subscribe(data => {console.log(data)
      this.subonget = this.utils.getUser(this.user.id)
      .subscribe(refresh => this.user = refresh)
    })
  }

  deleteUser()
  {
    this.subondelete = this.utils.deleteUser(this.user.id)
    .subscribe(data => {console.log(data)
    window.location.reload()}
    )}

    userTasks(u: Users)
    {
      let AllTasks: boolean;
      let tasks = []
      u.Tasks.forEach(t => 
        tasks.push(t.completed)
      );
      AllTasks = tasks.every(x=>x===true)
      
      return AllTasks
    }
  



  

  ngOnInit(): void {
    
  }

  ngOnDestroy()
  {
   this.subonput.unsubscribe();
   this.subondelete.unsubscribe();
   this.subonget.unsubscribe();

  }

}
