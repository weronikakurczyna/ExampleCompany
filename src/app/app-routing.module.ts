import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {InformationComponent} from './information/information.component';
import {CareerComponent} from './career/career.component';
import {ClientsComponent} from './clients/clients.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [

  {
    path: 'information',
    component: InformationComponent
  },
  {
    path: 'career',
    component: CareerComponent
  },
  {
    path: 'clients',
    component: ClientsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
