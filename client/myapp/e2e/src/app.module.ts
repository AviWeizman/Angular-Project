import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { NewUserComponent } from './new-user/new-user.component';
import { PostComponent } from './post/post.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { PostsandtasksComponent } from './postsandtasks/postsandtasks.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserComponent } from './user/user.component';

const approutes : Routes = 
                       [{path : "",component :MainpageComponent}

                       ]

@NgModule({
  declarations: [
    AppComponent,
    
  MainpageComponent,
   NewUserComponent,
   PostComponent,
   PostsandtasksComponent,
   TasksComponent,
   UserComponent,
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,  
    RouterModule.forRoot(approutes),
    
    NoopAnimationsModule    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
