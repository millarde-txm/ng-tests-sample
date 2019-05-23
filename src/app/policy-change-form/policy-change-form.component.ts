import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

import {
  HttpClient, HttpResponse, HttpRequest,
  HttpEventType, HttpErrorResponse, HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileUploader, FileUploaderOptions } from 'ng2-file-upload';
import { UploadEvent, UploadFile, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { map } from 'rxjs/internal/operators/map';
import { FormGroup, NgForm } from '@angular/forms';
const URL = 'http://localhost:3000/fileupload/';

class Myform {
  changeType: string = '';
}


@Component({
  selector: 'app-policy-change-form',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './policy-change-form.component.html',
  styleUrls: ['./policy-change-form.component.scss'],
  animations: []
})



export class PolicyChangeFormComponent implements OnInit {
  /** variables for form data */
  insuredName: string;
  agentEmail: string;
  policyNumber: string;
  todayDate = new Date();
  ninetyDate = new Date(this.todayDate.getMonth() + 3);
  
  specificNomcTextMessage: string;

  /** collapsible list accordion*/
  panelOpenState = false;
  oneAtATime = true;
  myForm: Myform;
  policyChangeForm: FormGroup;
  isSpecificNomc:boolean = false;
  isBlanketNomc:boolean = false;
  isAlternate:boolean = false;
  isSpecificWaiver:boolean = false;
  isBlanketWaiver:boolean = false;
  isOther:boolean = false;
  isMailingAddressChange: boolean = false;

  firstName: String;
  lastName: String;
  state: String;
  //public isCollapsed = false;
  //collapsibleActions = new EventEmitter<string>();
  /** file upload */
  fileToUpload: File = null;
  fileUploadService: any;
  endpoint = '/docDataServicesWeb/uploadPolicyHolderDoc';
  
  public files: UploadFile[] = [];
  relativePath: any;
  form: FormGroup;
  error: string;
  userId: number = 1;
  myform1 = document.querySelector('form');
  data = new FormData(this.myform1);
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data'
    })
  };
  
public uploader: FileUploader = new FileUploader({
  url: URL,
  disableMultipart : false,
  autoUpload: true,
  method: 'post',
  itemAlias: 'attachment',
  allowedFileType: ['pdf', 'doc', 'xls', 'xlsx'], 
  queueLimit: 5
  });


  constructor(private route: ActivatedRoute, private http: HttpClient) { }
  ngOnInit() {
    //alert((this.ninetyDate.getMonth() +">>>>"+ ((this.ninetyDate.getMonth()+4)/11).toFixed()));
    this.route.queryParams.subscribe(params => {
      this.insuredName = params['insuredName'];
      this.policyNumber = params['policyNumber'];
      this.agentEmail = params['agentEmail'];
      console.log("agentEmail>>>>>",this.agentEmail);
      console.log("TESTING APP-UPLOAD");
    })
    this.myForm = new Myform();
  }
  
  public onFileSelected(event: EventEmitter<File[]>) {
    const file: File = event[0];
    console.log(file);
  }

  /* Accordion funcitonality */

    showSpecificNomc() {
    this.myForm.changeType = 'specificmaterial';
    this.isSpecificNomc=true;
    this.isBlanketNomc=false;
    this.isAlternate=false;
    this.isSpecificWaiver=false;
    this.isBlanketWaiver=false;
    this.isOther=false;
    this.isMailingAddressChange=false;
    console.log('Specific NOMC')
  }

  showBlanketNomc() {
    this.myForm.changeType = 'blanketmaterial';
    this.isBlanketNomc=true;
    this.isSpecificNomc=false;
    this.isAlternate=false;
    this.isSpecificWaiver=false;
    this.isBlanketWaiver=false;
    this.isOther=false;
    this.isMailingAddressChange=false;
    console.log('Blanket NOMC')
  }

  showAlternate() {
    this.myForm.changeType = 'alternate';
    this.isAlternate=true;
    this.isBlanketNomc=false;
    this.isSpecificNomc=false;
    this.isSpecificWaiver=false;
    this.isBlanketWaiver=false;
    this.isOther=false;
    this.isMailingAddressChange=false;
    console.log('alternate')
  }
  showSpecificWaiver() {
    this.myForm.changeType = 'specificwaiver';
    this.isSpecificWaiver=true;
    this.isBlanketWaiver=false;
    this.isAlternate=false;
    this.isSpecificNomc=false;
    this.isBlanketNomc=false;
    this.isOther=false;
    this.isMailingAddressChange=false;
    console.log('waiver')
  }
  showBlanketWaiver() {
    this.myForm.changeType = 'blanketwaiver';
    this.isBlanketWaiver=true;
    this.isSpecificWaiver=false;
    this.isAlternate=false;
    this.isSpecificNomc=false;
    this.isBlanketNomc=false;
    this.isOther=false;
    this.isMailingAddressChange=false;
    console.log('waiver')
  }
  showOther() {
    this.myForm.changeType = 'other';
    this.isOther=true;
    this.isAlternate=false;
    this.isSpecificNomc=false;
    this.isBlanketNomc=false;
    this.isSpecificWaiver=false;
    this.isBlanketWaiver=false;
    this.isMailingAddressChange=false;
    console.log('other')
  }
  showMailingAddressChange() {
    this.myForm.changeType = 'other';
    this.isMailingAddressChange=true;
    this.isAlternate=false;
    this.isSpecificNomc=false;
    this.isBlanketNomc=false;
    this.isSpecificWaiver=false;
    this.isBlanketWaiver=false;
    this.isOther=false;
    console.log('Mailing Address Change')
  }

  populateStates(){
}


  

  /*
  isChecked(val:string) {
    let isChecked:boolean = false;
    console.log('val', val);
    
    
    if(this.myForm.changeType=='material') {
      isChecked=true;
      this.isMaterial=true;
    }
  }
  */
 enableDisable(textMessage: string){
    //console.log(">>>>>>>>>>>>"+specificNomcTextMessage);
    if(textMessage){
      textMessage='';
      return false;
    }
    else { 
      //console.log("size before>>>>"+specificNomcTextMessage.length + ">>>"+specificNomcTextMessage.toString());
     
      //console.log("size after>>>>"+specificNomcTextMessage.length+ ">>>"+specificNomcTextMessage.toString());
      return true;
    }
 }

 save(text:string){
   this.specificNomcTextMessage=text;
   console .log("text>>>"+this.specificNomcTextMessage);
 }
  onSubmit(f: NgForm) {
    console.log("inside uploadToActivity!");
    console.log("f.value"+f.value);  // { first: '', last: '' }
    console.log("f.valid"+f.valid);  // false
    alert("inside uploadToActivity!");
    /* this.http.post(this.endpoint,
      {
        "policyNumber": "0002022622",
        "policyEffDate": "02/15/2017",
        "insuredName": "RENEWAL CREDIT 1",
        "policyEndDate": "02/15/2018",
        "message": " this is a test message from angular",
        "agentId": "13946",
        "senderEmail": "srinithisarathy@texasmutual.com",
        "userId": "sara5690",
        "userFullName": "Srinithi",
        "policyChangeRequestType": "ALTENDT",
        "agentCompanyName": "JOHN L WORTHAM & SON LP",
        "files": ""
      }, this.httpOptions)
      .subscribe(
        data => {
          console.log("POST Request is successful ", data);
        },
        error => {
          console.log("Error", error);
        }
      );*/
  }
}

