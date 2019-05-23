import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PolicyChangeFormComponent } from './policy-change-form/policy-change-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule} from "@angular/common/http";
import { AccordionModule } from 'ngx-foundation';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { UploadComponent } from './upload/upload.component';
import { FileUploadModule } from 'ng2-file-upload';
import { BsDatepickerModule } from 'ngx-foundation';
import { CollapsibleModule } from 'angular2-collapsible';
import { FileDropModule } from 'ngx-file-drop';
import { FileUploader, FileUploaderOptions, ParsedResponseHeaders } from 'ng2-file-upload';
import { from } from 'rxjs';
// import { AngularFileUploaderModule } from "angular-file-uploader";



@NgModule({
  declarations: [
    AppComponent,
    PolicyChangeFormComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    HttpClientModule,
    CollapsibleModule,
    FormsModule,
    FileUploadModule,
    FileDropModule
  ],
  exports: [
    BrowserAnimationsModule,
    FileUploadModule,
    HttpClientModule,
    BsDatepickerModule,
    FileDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
