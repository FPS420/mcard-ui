import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MenuSearchComponent} from "./menu-search/menu-search.component";
import {MenuCardPermaComponent} from "./menu-card-perma/menu-card-perma.component";
import {BusinessAreaComponent} from "./business-area/business-area.component";
import {McardFormComponent} from "./mcard-form/mcard-form.component";


const routes: Routes = [
  {path: '', component: MenuSearchComponent},
  {path: 'mcard/:menuId', component: MenuCardPermaComponent},
  {path: 'app', component: BusinessAreaComponent},
  {path: 'app/create/menu/:businessName', component: McardFormComponent},
  {path: '**', component: MenuSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
