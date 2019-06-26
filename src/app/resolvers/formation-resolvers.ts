import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable, of} from "rxjs";
import {delay} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class FormationResolvers implements Resolve<any>{

  constructor() { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    const TIME_TO_WAIT = 5000;
    return of([{
      nom: 'Module Angular',
      decription: '',
    }, {
      nom: 'Module JavaScript',
      decription: '',
    }, {
      nom: 'Module TypeScript',
      decription: '',
    }]).pipe(
      delay(TIME_TO_WAIT)
    );
  }
}
