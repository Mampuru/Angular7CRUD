import { Injectable } from '@angular/core';
import { UserDetail } from './user-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {
  formData:UserDetail
  readonly baseURL = "http://localhost:5001/api";
  list : UserDetail[];

  constructor(private http:HttpClient) { }

  postUserDetail(){
   return this.http.post(this.baseURL + "/user", this.formData)
  }

  putUserDetail(){
    return this.http.put(this.baseURL + "/user/" + this.formData.id, this.formData)
   }

   deleteUserDetail(id){
    return this.http.delete(this.baseURL + "/user/" + id)
   }

  //Gets all user details
  listUsers(){
    this.http.get(this.baseURL+"/user",)
    .toPromise()
    .then(res => this.list = res as UserDetail[])
  }
  

}
