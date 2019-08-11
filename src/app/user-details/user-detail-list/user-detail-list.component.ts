import { Component, OnInit } from '@angular/core';
import { UserDetailService } from 'src/app/shared/user-detail.service';
import { UserDetail } from 'src/app/shared/user-detail.model';

@Component({
  selector: 'app-user-detail-list',
  templateUrl: './user-detail-list.component.html',
  styleUrls: ['./user-detail-list.component.css']
})
export class UserDetailListComponent implements OnInit {

  constructor(private service:UserDetailService) { }

  ngOnInit() {
    this.service.listUsers()
  }

  populateFrom(ud:UserDetail){
    this.service.formData = Object.assign({},ud)
  }

  onDelete(id){
    if(confirm("Are you sure you to delete this record ?")){
      this.service.deleteUserDetail(id)
      .subscribe(res => {
        this.service.listUsers()
      },
        err=>{
          console.log(err)
      })
    }
  }

}
