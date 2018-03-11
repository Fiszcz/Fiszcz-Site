import { Component, OnInit } from '@angular/core';
import { degree } from './degree';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})

export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  studyITb = [
    {name:"pierwszy",
    degrees: [
      new degree("Algebra liniowa", 3, 4.5),
      new degree("Analiza matematyczna", 6, 4.5),
      new degree("Fizyka ogólna", 4, 4.5),
      new degree("Języki i metody programowania 1", 5, 4.5),
      new degree("Podstawy informatyki", 6, 4.5),
      new degree("Podstawy zarządzania", 2, 4.5),
      new degree("Prawo własności intelektualnej", 2, 5),
      new degree("Systemy operacyne 1", 2, 4),
      new degree("Wychowanie fizyczne 1", 0, "Zaliczone")
    ]},
    {name:"drugi",
    degrees: [
      new degree("Grafika inżynierka",5,4.5),
      new degree("Języki i metody programowania 2",5,4),
      new degree("Metody probabilistyczne i statystyka", 5,4.5),
      new degree("Podstawy teorii mnogości i matematyi dyskretnej", 4,5),
      new degree("Podstawy inżynierii oprogramowania", 4, 4.5),
      new degree("Systemy operacyjne 2", 2, 5),
      new degree("Teoria obwodów i sygnałów", 5,4.5),
      new degree("Wychowanie fizyczne 2", 0, "Zaliczone")
    ]},
    {name:"trzeci",
      scholarship:true,
    degrees: [
      new degree("Angielski",4,4.5),
      new degree("Algorytmy i struktury danych",5,5),
      new degree("Fizyczne podstawy elektrotechniki i elektroniki",4,3.5),
      new degree("Modelowanie oprogramowania w języku UML", 5,5),
      new degree("Programowanie internetowe",2,5),
      new degree("Sieci komuterowe",3,3.5),
      new degree("Technika cyfrowa",3,4.5),
      new degree("Technika mikroprocesorowa",3,4),
      new degree("Wychowanie fizyczne 3", 0, "Zaliczone")
    ]},
    {name:"czwarty",
      scholarship: true,
    degrees:[
      new degree("Angielski", 4,4),
      new degree("Architektura systemów komputerowych 2", 2,4),
      new degree("Metody numeryczne",4,4),
      new degree("Ochrona danych w systemach informatycznych",4,4.5),
      new degree("Programowanie obiektowe", 5,5),
      new degree("Sieci komputerowe laboratoria", 2,5),
      new degree("Technika cyfrowa laboratoria",2,4),
      new degree("Technika mikroprocesorowa laboratoria", 2,4.5),
      new degree("Technika pomiarowa i przetwarzanie sygnałów",5,5),
      new degree("Wychowanie fizyczne 4",0,"Zaliczone")
    ]},
    {name:"piąty",
      scholarship: true,
    degrees:[
      new degree("Angielski", 4,4),
      new degree("Baza danych", 4,5),
      new degree("Bezpieczeństwo aplikacji internetowych i mobilnych", 3,4.5),
      new degree("Eksploracja danych", 3,5),
      new degree("Metody tworzenia aplikacji bazodanowych",3,5),
      new degree("Podstawy sztucznej inteligencji",3,5),
      new degree("Projekt indywidualny", 4,5),
      new degree("Prowadzenie projektów IT",4,5)
    ]},
    {name:"szósty",
    scholarship: true,
    degrees:[
      new degree("Big Data - przetwarzanie i analiza dużych zbiorów danych", 3, "W trakcie..."),
      new degree("Grafika komputerowa", 2,"W trakcie..."),
      new degree("Inżynieria wymagań oprogramowania", 4,"W trakcie..."),
      new degree("Podstawy sztucznej inteligencji laboratoria", 2,"W trakcie..."),
      new degree("Programowanie równoległe i rozproszone",3,"W trakcie..."),
      new degree("Projekt zespołowy",7,"W trakcie..."),
      new degree("Przedsiębiorczość innowacyjna",2,"W trakcie..."),
      new degree("Systemy wbudowane i czasu rzeczywistego",3,"W trakcie..."),
      new degree("Technika multimedialne",3,"W trakcie..."),
      new degree("Wykorzystanie MS SQL i pakietów MS Business Intelligence do budowy aplikacji",3,"W trakcie...")
    ]}
  ]
}
