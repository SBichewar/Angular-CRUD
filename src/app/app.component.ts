import { Component } from '@angular/core';
import{MyServiceService} from './my-service.service'
import{HttpClient} from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http';
import  { map, catchError, timeout } from 'rxjs/operators';
import{SqrtPipe} from './sqrt.pipe'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo project angular';

  jsondata={name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}};

  months = ["January", "Feburary", "March", "April", "May", 
  "June", "July", "August", "September",
  "October", "November", "December"];

  IsAvailable=true;
todaysdate;
  constructor(private myservice:MyServiceService,private httcl:HttpClient){
this.todaysdate=myservice.showdate();

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    //'Authorization': 'my-auth-token'
  })
};


// this.httcl.get("http://jsonplaceholder.typicode.com/users").subscribe(data => {
  this.httcl.get("http://localhost:56200/api/home/1",httpOptions).subscribe(data => {
  console.log(data);
  }); 

 

}

  

  MyClick(event){
    alert("test");
    console.log(event);
    this.IsAvailable=false;
  }
  MyChange(event){
    alert("change event");
    console.log(event);
  }
}
