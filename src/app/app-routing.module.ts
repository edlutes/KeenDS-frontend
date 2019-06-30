import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectComponent } from './select/select.component';
import { HomeComponent } from './home/home.component';

/* import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
 */
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'select', component: SelectComponent},
/*   {path: '**', component:PagenotfoundComponent},
 */];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
