import { Component, OnInit } from '@angular/core';
import{MyServiceService} from '../my-service.service';
import{FormGroup,FormControl,Validator, Validators} from '@angular/forms'

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  searchTerm : FormControl = new FormControl();
  myBooks = <any>[];
 // myBooks;
  constructor(private MySer:MyServiceService) { }
  ngOnInit() {

    this.searchTerm.valueChanges.subscribe(
      term => {
        if (term != '') {
          this.MySer.search(term).subscribe(
            data => {
              //data=JSON.parse(data);
              this.myBooks =data as any[];
              //console.log(data[0].BookName);
          })
        }
    })

  }

}
