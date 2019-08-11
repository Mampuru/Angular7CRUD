import { Component, OnInit } from '@angular/core';
import { UserDetailService } from 'src/app/shared/user-detail.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private service:UserDetailService) { }

  ngOnInit() {
    this.resetForm()
  }

  resetForm(form?:NgForm){
    if(form != null)
      form.resetForm();
    this.service.formData ={
      id : 0,
      name : '',
      surname : '',
      idNumber : 0,
      passportNumber : 0,
      mobileNumber : 0,
      emailAddress : ''

    }
  }

  onSubmit(form:NgForm){
    //Adding user to database
    if(this.service.formData.id == 0)
      this.insertRecord(form)
    else
      //Updating user in database
      this.updateRecord(form)
  }

  insertRecord(form:NgForm){
    this.service.postUserDetail().subscribe(
      res => {
        this.resetForm(form)
        this.service.listUsers()
      },
      err => {
        console.log(err)
      }
    )
  }

  updateRecord(form:NgForm){
    this.service.putUserDetail().subscribe(
      res => {
        this.resetForm(form)
        this.service.listUsers()
      },
      err => {
        console.log(err)
      }
    )
  }
}
