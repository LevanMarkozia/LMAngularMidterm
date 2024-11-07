import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ParentUser } from '../parent-user';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';
import { ChildUser } from '../child-user';
import { DisplayService } from '../display.service';

@Component({
  selector: 'app-user',
  standalone:true,
  imports: [CommonModule,AppComponent],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor(private displayService:DisplayService){}
  @Input({required:true}) parentUsersInput!:ParentUser[];
  childUsers:ChildUser[]=[
    {id:5,firstname:"Joe",lastname:"Doe",dateofbirth:"04.04.2003",phonenumber:"456789123",email:"joedoe@mail.com"},
    {id:6,firstname:"Jack",lastname:"Doe",dateofbirth:"05.05.2002",phonenumber:"567891234",email:"jackdoe@mail.com"},
  ]
  @Output() childUserOutput=new EventEmitter<ChildUser[]>();
  ngOnInit(){
    this.childUserOutput.emit(this.childUsers);
  }
  displayValue:string="";
  display(){
    this.displayValue=this.displayService.displayArr(this.childUsers);
  }
}