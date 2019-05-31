import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-formlydemo',
  templateUrl: './formlydemo.component.html',
  styleUrls: ['./formlydemo.component.css']
})
export class FormlydemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  } 


  orderForm = new FormGroup({});

  order = {
    tagName: '',
    color: 'powder-blue', 
    quantity: 3,
    size: 'M',
    terms: false
  };


  orderFields: FormlyFieldConfig[] = [
    {
      key: 'tagName',
      type: 'input', // input type
      templateOptions: {
        type: 'text',
        label: 'Tag name for your outfit',
        placeholder: 'tag name'
      }
    },
    {
      key: 'color',
      type: 'select',
      templateOptions: {
        label: 'Outfit color',
        options: [
          { label: 'Powder blue', value: 'powder-blue' },
          { label: 'Orange crush', value: 'orange-crush' },
          { label: 'Purple haze', value: 'purple-haze' }
        ]
      }
    },
    {
      key: 'quantity',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'How many outfits?',
        placeholder: 'quantity',
        required: true
      }
    },
    {
      key: 'size',
      type: 'select',
      defaultValue: 'M',
      templateOptions: {
        label: 'Size',
        options: [
          { label: 'Small', value: 'S' },
          { label: 'Medium', value: 'M' },
          { label: 'Large', value: 'L' }
        ]
      }
    },
    {
      key: 'terms',
      type: 'checkbox',
      templateOptions: {
        label: 'You accept our terms and conditions',
        required: true
      }
    }
  ];

  onSubmit(orderInfo) {
    console.log(orderInfo);
  }

}
