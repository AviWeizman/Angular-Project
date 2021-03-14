import { Component, OnInit,Input } from '@angular/core';
import {Users} from '../users'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }
  @Input()
  postcard : any ;
  @Input()
  user : Users;  

  ngOnInit(): void {
  }

}
