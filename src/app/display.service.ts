import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor() { }
  displayedArray:string="";
  arrayToDisplay:any;
  displayArr(arr:any){
    console.log("Array displayed by Display service");
    arr.forEach((element:any)=>{
      console.log(element);
    });
    return JSON.stringify(arr);
  }
}
