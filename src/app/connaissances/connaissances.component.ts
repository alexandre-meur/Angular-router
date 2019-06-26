import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connaissances',
  templateUrl: './connaissances.component.html',
  styleUrls: ['./connaissances.component.css']
})
export class ConnaissancesComponent implements OnInit {

  connaissances = [
    {nom: 'Algo', anneeExp: '3'},
    {nom: 'Prog', anneeExp: '2'},
    {nom: 'Angais', anneeExp: '4'},
    {nom: 'Compilation', anneeExp: '1'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
