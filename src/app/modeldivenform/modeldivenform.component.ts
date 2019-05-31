import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validator, Validators} from '@angular/forms'
import{Employee} from '../employee';
import{MyServiceService} from '../my-service.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-modeldivenform',
  templateUrl: './modeldivenform.component.html',
  styleUrls: ['./modeldivenform.component.css']
})
export class ModeldivenformComponent implements OnInit {
id=0;
  //constructor(private Emp:Employee,private MyService:MyServiceService) { }
  arr: Array<{Id: number, FirstName: string,LastName:string,EmailId:string,Gender:string,IsEnabled:boolean,City:string}> = [
    //{Id: 1, FirstName: 'test',LastName: 'test',EmailId: 'test@gmail.com'},
  ];

  Citys: Array<{Value: string}> = [
    {Value: 'Nanded'},
    {Value: 'Pune'},
    {Value: 'Mumbai'}
  ];

  constructor(private MyService:MyServiceService) { }
  Emp =new Employee;
   protected EmpDtl$: Observable<Employee[]>;
  EmailId;
  formdata;
  res;
  ngOnInit() {
  this.formdata = new FormGroup({
    FirstName: new FormControl(""),
    LastName: new FormControl(""),
    EmailId: new FormControl("",Validators.compose([
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ])),
    Gender:new FormControl("Male"),
    IsEnabled:new FormControl(true),
    City:new FormControl()
    //passwd: new FormControl("")
 });
 
 this.MyService.GetEmployeeDetails().subscribe(res => {
  this.EmpDtl$ =JSON.parse(res); 
  this.arr=[];
  res=JSON.parse(res);
    for (let i = 0; i < res.length; i++) {
          this.arr.push({Id: res[i]['Id'],
          FirstName:res[i]['FirstName'],
          LastName: res[i]['LastName'],
          EmailId:res[i]['EmailId'],
          Gender:res[i]['Gender'],
          IsEnabled:res[i]['IsEnabled'],
          City:res[i]['City']
        });  
    }
});
 
}
onClickSubmit(data) {

  if(this.id>0){
    for (let i = 0; i < this.arr.length; i++) {
      if(this.id==this.arr[i]['Id']){
        this.arr[i]['FirstName']=data.FirstName;
        this.arr[i]['LastName']=data.LastName;
        this.arr[i]['EmailId']=data.EmailId;
        this.arr[i]['Gender']=data.Gender;
        this.arr[i]['IsEnabled']=data.IsEnabled;
        this.arr[i]['City']=data.City;
      }
    }
  }else{
 this.arr.push({Id: this.arr.length+1,
  FirstName:data.FirstName,
  LastName:data.LastName,
  EmailId:data.EmailId,
  Gender:data.Gender,
  IsEnabled:data.IsEnabled,
  City:data.City
});  
}
this.formdata = new FormGroup({
  FirstName: new FormControl(""),
  LastName: new FormControl(""),
  EmailId: new FormControl("",Validators.compose([
    Validators.required,
    Validators.email
  ])),
  Gender:new FormControl("Male"),
  IsEnabled:new FormControl(true),
  City:new FormControl()
});
console.log(this.arr);
  this.Emp.FirstName = data.FirstName;
  this.Emp.LastName = data.LastName;
  this.Emp.EmailId = data.EmailId;
if(this.id!== undefined && this.id!= null && this.id>0)
{
  this.Emp.Id = this.id; 
}else{
  this.Emp.Id =0;
}
  
  this.Emp.City=data.City;
  this.Emp.Gender=data.Gender;
  this.Emp.IsEnabled=data.IsEnabled;
  this.MyService.SaveEmployeeDetails(this.Emp).subscribe(data => {
    this.arr=[];
    data=JSON.parse(data);
    for (let i = 0; i < data.length; i++) {
          this.arr.push({Id: data[i]['Id'],
          FirstName:data[i]['FirstName'],
          LastName: data[i]['LastName'],
          EmailId:data[i]['EmailId'],
          Gender:data[i]['Gender'],
          IsEnabled:data[i]['IsEnabled'],
          City:data[i]['City']
        });  
    }
    });
    this.id=0;
}

deleteEmp(data){

  this.MyService.DeleteEmployeeDetails(data.Id).subscribe(data => {
    this.arr=[];
    data=JSON.parse(data);
    for (let i = 0; i < data.length; i++) {
          this.arr.push({Id: data[i]['Id'],
          FirstName:data[i]['FirstName'],
          LastName: data[i]['LastName'],
          EmailId:data[i]['EmailId'],
          Gender:data[i]['Gender'],
          IsEnabled:data[i]['IsEnabled'],
          City:data[i]['City']
        });  
    }
    });
  
}

editEmp(data){
  this.id=data.Id;
  this.formdata = new FormGroup({
    FirstName: new FormControl(data.FirstName),
    LastName: new FormControl(data.LastName),
    EmailId: new FormControl(data.EmailId,Validators.compose([
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ])),
    Gender: new FormControl(data.Gender),
    IsEnabled:new FormControl(data.IsEnabled),
    City:new FormControl(data.City)
  });
}

}


