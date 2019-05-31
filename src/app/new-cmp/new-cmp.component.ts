import { Component, OnInit } from '@angular/core';
import{MyServiceService} from '../my-service.service'

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {
  newcomponent  = "Entered in new component created";
  todate;
  constructor(private myservice:MyServiceService) {
    this.todate=myservice.showdate();
   }

  ngOnInit() {
  }

}
