import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Users } from './users';


@Injectable({
  providedIn: 'root'
})
export class UserutilsService {

  constructor(private http : HttpClient) { }

  getallusers()
  {
    return this.http.get<Users[]>("http://localhost:8000/api/users");

  }

  getUser(id : string)
  {
    return this.http.get<Users[]>("http://localhost:8000/api/users" + id)
  }

  postUser( user : Users)
  {
      return this.http.post("http://licalhost:8000/api/users" , user)
  }

  putUser(id : string , user : Users)
  {
    return this.http.put("http://localhost:8000/api/users" + id ,user)
  }

  deleteUser(id : string)
  {
    return this.http.delete("http://localhost:8000/api/users" + id) 
  }

  async findUser(search : string)
  {
    let all = await this.http.get<Users[]>("http://localhost:8000/api/users").toPromise()

    let result = []
    all.forEach(user => 
      {
        if(user.Name.toLowerCase().includes(search.toLowerCase()) || user.Email.toLowerCase().includes(search.toLowerCase()))
        {
          result.push(user)
        }
      })
    return result;

  }



}
