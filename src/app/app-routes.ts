import {Routes} from "@angular/router";
import {PATH_DETAIL, PATH_HOME} from "./app.routes.constantes";
import {HomeComponent} from "./home/home.component";
import {DetailComponent} from "./detail/detail.component";

export const ROUTES: Routes = [
  {
    path: PATH_HOME,
    component: HomeComponent,
  },
  {
    path: PATH_DETAIL,
    component: DetailComponent,
  },
];
