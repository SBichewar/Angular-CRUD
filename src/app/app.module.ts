import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{MyServiceService} from './my-service.service';
import { AppRoutingModule } from './app-routing.module';
import{FormsModule} from '@angular/forms'
import{ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatButtonModule,MatMenuModule,MatSidenavModule,MatAutocompleteModule } from '@angular/material';
import{HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { ModeldivenformComponent } from './modeldivenform/modeldivenform.component';
import { MaterialnavComponent } from './materialnav/materialnav.component';
import {MatInputModule} from '@angular/material/input';
import { SqrtPipe } from './sqrt.pipe';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { FormlydemoComponent } from './formlydemo/formlydemo.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    TemplateformComponent,
    ModeldivenformComponent,
    MaterialnavComponent,
    SqrtPipe,
    AutocompleteComponent,
    ChildComponent,
    ParentComponent,
    FormlydemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
