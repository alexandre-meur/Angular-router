import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {DetailComponent} from "./detail/detail.component";
import {FormationsComponent} from "./formations/formations.component";
import {ConnaissancesComponent} from "./connaissances/connaissances.component";
import {
  PATH_DETAIL,
  PATH_DETAIL_CONNAISSANCES,
  PATH_DETAIL_FORMATIONS,
  PATH_DETAIL_PARAM,
  PATH_HOME
} from "./app.routes.constantes";

export const ROUTES: Routes = [
  {
    path: PATH_HOME,
    component: HomeComponent,
  },
  {
    path: PATH_DETAIL+PATH_DETAIL_PARAM,
    component: DetailComponent,
    children: [
        { path: '', pathMatch: 'full', redirectTo: PATH_DETAIL_FORMATIONS },
        { path: PATH_DETAIL_FORMATIONS, component: FormationsComponent },
        { path: PATH_DETAIL_CONNAISSANCES, component: ConnaissancesComponent },
      ]
  },
];
