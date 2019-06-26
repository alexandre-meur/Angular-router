import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PATH_HOME} from "../app.routes.constantes";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  currentId:number = 0;

  constructor(private router:Router,
              private route: ActivatedRoute
              ) { }

  navigateToHome(){
    this.router.navigate([PATH_HOME])
      .then( () => console.log('to home'))
      .catch( () => console.log('error to home'));
  }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map( params => Number.parseInt(params.get('idDetail')))
      )
      .subscribe( id => {
        console.log(id);
        this.currentId = id;
      });
  }
}
