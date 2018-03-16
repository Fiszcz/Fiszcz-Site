import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('.modal').modal();
    });
  }

}
