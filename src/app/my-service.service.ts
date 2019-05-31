import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
//import { catchError, retry } from 'rxjs/operators';
import {map} from 'rxjs/operators';
//import { headersToString } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  baseUrl: string = 'http://localhost:56200/api';

  constructor(private httpcl:HttpClient ) { }
  showdate(){
    let ndate=new Date();
    return ndate;
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
      //'Authorization': 'my-auth-token'
    })
  };  

   SaveEmployeeDetails(EmployeeDetails: Employee) {
     return this.httpcl.post<any>('http://localhost:56200/api/home/EmployeeDetail/', EmployeeDetails);
   } 
   DeleteEmployeeDetails(Id: Number) {
    return this.httpcl.delete<any>('http://localhost:56200/api/home/DeleteEmployeeDetail?Id='+ Id);
   } 
   GetEmployeeDetails():Observable<any>  {
  return this.httpcl.get('http://localhost:56200/api/home')
     .pipe(
          map(res => res)
      );
   } 
  search(term) {       
    var listOfBooks = this.httpcl.get<any>('http://localhost:56200/api/home?sLookUpString=' + term,this.httpOptions)
     .pipe(
        //debounceTime(500),  // WAIT FOR 500 MILISECONDS ATER EACH KEY STROKE.
        map(
            (data: any) => {
                return (
                    data.length != 0 ? data as any[] : [{"BookName": "No Record Found"} as any]
                );
            }
    )); 

    return listOfBooks;  
}  

}


