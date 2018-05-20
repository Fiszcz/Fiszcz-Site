import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css'],
  animations: [
    trigger(
      'collapseEffect',
      [
        transition(
          ':enter', [
            style({'max-height': "0px", opacity: 0}),
            animate('200ms', style({'max-height': "350px", 'opacity': 1}))
          ]
        ),
        transition(
          ':leave', [
            style({'max-height': "350px", 'opacity': 1}),
            animate('200ms', style({'max-height': "0px", opacity: 0}))
          ]
        )]
    ),
    trigger(
      'changeTechInType',
      [
        transition(
          ':enter', [
            style({opacity: 0}),
            animate('300ms', style({'opacity': 1}))
          ]
        )]
    )
  ]
})
export class TechnologiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.sources.set("C++", [{name: "Pasja C++ / Jerzy Grębosz", image: "https://www.ifj.edu.pl/private/grebosz/PASJA.JPG"},
      {name: "Symfonia C++ / Jerzy Grębosz", image: "https://static01.helion.com.pl/helion/okladki/326x466/a_006w.jpg"},
      {name: "C++ dla każdego / Jessy Liberty", image: "https://static01.helion.com.pl/helion/okladki/326x466/cppint.jpg"}]);
    this.sources.set("C", [{name: "Język C Programowanie / Ritchie, Kernighan", image: "https://static01.helion.com.pl/helion/okladki/326x466/jansic.jpg"}]);
    this.sources.set("Java", [{name: "Thinking in Java / Eckel", image: "https://static01.helion.com.pl/helion/okladki/326x466/thi4vv.jpg"}]);
    this.sources.set("Python", [{name: "Na studiach", image: "../../assets/images/logo-education/logo-pw.png"}]);
    this.sources.set("AngularJS", [{name: "w3schools.com", image: "https://webbygram.com/wp-content/uploads/2017/05/W3schools-Logo.png"}]);
    this.sources.set("HTML", [{name: "Na studiach", image: "../../assets/images/logo-education/logo-pw.png"}]);
    this.sources.set("JavaScript", [{name: "kursjs.pl", image: "http://kursjs.pl/materialy-reklamowe/kursjs-fb-avatar.png"}]);
    this.sources.set("CSS", [{name: "w3schools.com", image: "https://webbygram.com/wp-content/uploads/2017/05/W3schools-Logo.png"}]);
    this.sources.set("Bootstrap 4", [{name: "quackit.com", image: "https://media-cdn.list.ly/production/249365/1576812/item1576812_185px.png?ver=7887489425"}]);
    this.sources.set("Angular 4", [{name: "Dokumentacja", image: "../../assets/images/technologies/logo-tech/angular-4-logo.png"},
      {name: "tutorialspoint.com", image: "https://lh3.googleusercontent.com/FCMz5gMEQlgvAn99DzjX9Z2CuQ_MY2aInD1j87Y7uC1cimimyI2YjvHeqGVFyPW6EQ"}]);
    this.sources.set("Materialize", [{name: "Dokumentacja", image: "../../assets/images/technologies/logo-tech/materialize-logo.png"}]);
    this.sources.set("jQuery", [{name: "w3schools.com", image: "https://webbygram.com/wp-content/uploads/2017/05/W3schools-Logo.png"}]);
    this.sources.set("Spring", [{name: "javastart.pl", image: "https://javastart.pl/theme/genesis/pix/javastart.png"}]);
    this.sources.set("SAS", [{name: "Dwutygodniowy kurs w SASie", image: "https://i.forbesimg.com/media/lists/companies/sas_416x416.jpg"}]);
    this.sources.set("ANSI SQL", [{name: "w3schools.com", image: "https://webbygram.com/wp-content/uploads/2017/05/W3schools-Logo.png"}]);
    this.sources.set("Postgres", [{name: "tutorialspoint.com", image: "https://lh3.googleusercontent.com/FCMz5gMEQlgvAn99DzjX9Z2CuQ_MY2aInD1j87Y7uC1cimimyI2YjvHeqGVFyPW6EQ"},
      {name: "Dokumentacja", image: "../../assets/images/technologies/logo-tech/postgres-logo.png"},
      {name: "postgresqltutorial.com", image: "../../assets/images/logo-education/postgresqltutorial.jpg"},]);
    this.sources.set("SQL Server", [{name: "Na studiach", image: "../../assets/images/logo-education/logo-pw.png"}]);
  }

  sources = new Map();
  sourceKnowledge;
  selectedTechnology;
  sel = "";

  technologies = {
    programing : [
      {lang: "C", image: "../../assets/images/technologies/logo-tech/c-logo.png"},
      {lang: "C++", image: "../../assets/images/technologies/logo-tech/cpp_logo.png"},
      {lang: "Java", image: "../../assets/images/technologies/logo-tech/java-logo.png"},
      {lang: "Python", image: "../../assets/images/technologies/logo-tech/python-logo.png"}
    ],
    web : [
      {lang: "AngularJS", image: "../../assets/images/technologies/logo-tech/angular-js-logo.png"},
      {lang: "HTML", image: "../../assets/images/technologies/logo-tech/html-logo.png"},
      {lang: "CSS", image: "../../assets/images/technologies/logo-tech/css-logo.png"},
      {lang: "JavaScript", image: "../../assets/images/technologies/logo-tech/js-logo.png"},
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
      {lang: "SQL Server", image: "../../assets/images/technologies/logo-tech/sql-server-logo.png"}
    ]
  };

  programmingInfo = function (lang, type) {
    if(this.selectedTechnology == lang) {
      this.selectedTechnology = false;
      this.sel = "";
    }
    else {
      this.selectedTechnology = lang;
      this.sel = type;
      this.sourceKnowledge = this.sources.get(lang);
    }
  }

}
