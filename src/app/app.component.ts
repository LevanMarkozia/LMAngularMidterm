import { Component } from '@angular/core';
import { ParentUser } from './parent-user';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { User } from './user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [CommonModule,UserComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LevanMarkoziaMidterm';
  users=[
    {firstname:"John",lastname:"Doe",age:18},
    {firstname:"Jane",lastname:"Doe",age:19},
    {firstname:"Jim",lastname:"Doe",age:20},
    {firstname:"Joe",lastname:"Doe",age:21},
    {firstname:"Jack",lastname:"Doe",age:22}
  ]
  parentUsers:ParentUser[]=[
    {id:1,firstname:"John",lastname:"Doe",dateofbirth:"01.01.2006",phonenumber:"123456789",email:"johndoe@mail.com"},
    {id:2,firstname:"Jane",lastname:"Doe",dateofbirth:"02.02.2005",phonenumber:"234567891",email:"janedoe@mail.com"},
    {id:3,firstname:"Jim",lastname:"Doe",dateofbirth:"03.03.2004",phonenumber:"345678912",email:"jimdoe@mail.com"},
  ]
  value:any;
  sendData(value:any){
    this.value=value;
  }
  userModel:User={id:-1,firstname:"",lastname:"",dateofbirth:"",phonenumber:"",email:""};
  Users:User[]=[]
  addUser(){
    this.Users.push(JSON.parse(JSON.stringify(this.userModel)));
  }
}

