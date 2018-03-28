import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    $(document).ready(function(){
      $('.modal').modal();
    });

    this.mapDocumentations = new Map();
    this.mapDocumentations.set("youmap", "https://drive.google.com/file/d/1XI65v3jWKLsS3noeplaKJ1oIOaeh_Xue/preview");
    this.mapDocumentations.set("portalpracy", "https://drive.google.com/file/d/1QVyFAMmTZGgMTZQRwn9FrgzZFN2GCGF9/preview");
    this.mapDocumentations.set("generatorfraktali", "https://drive.google.com/file/d/1t653GZpU7Jks9iPQgSBs2BagKlOBOM8E/preview");
  }

  mapDocumentations;
  documentation;

  changeDocumentation = function (selected) {
      this.documentation = this.mapDocumentations.get(selected);
  }

}
