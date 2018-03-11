import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  technologies = {
    programing : [
      {lang: "C", image: "../../assets/images/technologies/logo-tech/c-logo.svg"},
      {lang: "C++", image: "../../assets/images/technologies/logo-tech/cpp_logo.png"},
      {lang: "Java", image: "../../assets/images/technologies/logo-tech/java-logo.png"},
      {lang: "Python", image: "../../assets/images/technologies/logo-tech/python-logo.png"}
    ],
    web : [
      {lang: "HTML", image: "../../assets/images/technologies/logo-tech/html-logo.png"},
      {lang: "CSS", image: "../../assets/images/technologies/logo-tech/css-logo.png"},
      {lang: "JavaScript", image: "../../assets/images/technologies/logo-tech/js-logo.png"},
      {lang: "AngularJS", image: "../../assets/images/technologies/logo-tech/angular-js-logo.png"},
      {lang: "Bootstrap 4", image: "../../assets/images/technologies/logo-tech/bootstrap-4-logo.png"},
      {lang: "Angular 4", image: "../../assets/images/technologies/logo-tech/angular-4-logo.png"},
      {lang: "Materialize", image: "../../assets/images/technologies/logo-tech/materialize-logo.png"},
      {lang: "jQuery", image: "../../assets/images/technologies/logo-tech/jquery-logo.gif"},
      {lang: "Spring", image: "../../assets/images/technologies/logo-tech/spring-logo.png"}
    ],
    database : [
      {lang: "SAS", image: "../../assets/images/technologies/logo-tech/SAS-logo.png"},
      {lang: "ANSI SQL", image: "../../assets/images/technologies/logo-tech/sql-logo.png"},
      {lang: "Postgres", image: "../../assets/images/technologies/logo-tech/postgres-logo.png"},
      {lang: "SQL Server", image: "../../assets/images/technologies/logo-tech/sql-server-logo.png"},
      {lang: "Oracle Database", image: ""}
    ]
  };

}
