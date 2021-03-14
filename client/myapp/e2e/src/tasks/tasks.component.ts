import { Component, OnInit, Input} from '@angular/core';
import { Subscription } from 'rxjs';
import {UserutilsService} from '../userutils.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  @Input()
  taskcard : any = {};
  @Input()
  user : any = {};

  subonput : Subscription;
  subonget : Subscription;


  constructor(private utils : UserutilsService) { }
  taskCompleted()
  {
    this.taskcard.completed = true;
    this.user.Tasks.map(task => task.id == this.taskcard.id)
    this.subonput = this.utils.putUser(this.user.id, this.user)
    .subscribe(data => {console.log(data)})
    this.subonget = this.utils.getUser(this.user.id)
    .subscribe(refresh => {this.user = refresh })
  }

  ngOnInit(): void {
  }

  ngOnDestroy()
  {
   this.subonput.unsubscribe();
   this.subonget.unsubscribe();
  }

}
