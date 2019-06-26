import {Component, OnInit} from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from "@angular/router";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Routeur';
  idDetail = 1;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(
          e => e instanceof NavigationStart
            || e instanceof NavigationEnd
            || e instanceof NavigationError
            || e instanceof NavigationCancel
        )
      )
      .subscribe(e => {
        console.log('Event : ', e.constructor.name, e);
      });
  }
}
