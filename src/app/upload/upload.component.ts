import { Component, OnInit, EventEmitter } from '@angular/core';
import { UploadEvent, UploadFile, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { FormGroup } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { FileUploader } from 'ng2-file-upload';

const URL = 'http://localhost:3000/fileupload/';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})

export class UploadComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({
    url: URL,
    disableMultipart: false,
    autoUpload: true,
    method: 'post',
    itemAlias: 'attachment',
    allowedFileType: ['pdf', 'doc', 'xls', 'xlsx'],
    queueLimit: 5
  });

  public onFileSelected(event: EventEmitter<File[]>) {
    const file: File = event[0];
    console.log(file);

  }
  // fileToUpload: File = null;
  // fileUploadService: any;
  // httpClient: any;
  // endpoint = 'http://localhost:9081/docDataServicesWeb/uploadPolicyHolderDoc';
  // todayDate = new Date();
  // public files: UploadFile[] = [];
  // relativePath: any;
  // form: FormGroup;
  // error: string;
  // userId: number = 1;
  // uploadResponse = { status: '', message: '', filePath: '' };
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'multipart/form-data'
  //   })
  // };
  // hasBaseDropZoneOver: boolean = false;
  // uploader: FileUploader;
  // afuConfig = {
  //   multiple: true,
  //   formatsAllowed: ".pdf,.jpg,.png",
  //   maxSize: "5",
  //   uploadAPI: {
  //     url: this.endpoint,
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   },
  //   theme: "dragNDrop",
  //   hideProgressBar: true,
  //   hideResetBtn: true,
  //   hideSelectBtn: true,
  //   replaceTexts: {
  //     selectFileBtn: 'Select Files',
  //     resetBtn: 'Reset',
  //     uploadBtn: 'Upload',
  //     dragNDropBox: 'Drag N Drop',
  //     attachPinBtn: 'Attach Files...',
  //     afterUploadMsg_success: 'Successfully Uploaded !',
  //     afterUploadMsg_error: 'Upload Failed !'
  //   }
  // };
  constructor() {
  }
  ngOnInit() {
  };
}
