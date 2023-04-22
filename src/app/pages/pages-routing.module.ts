import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfosComponent } from './infos/infos.component';
import { ContributionsComponent } from './contributions/contributions.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContributeComponent } from './contribute/contribute.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'infos', component: InfosComponent },
  { path: 'contribute', component: ContributeComponent },
  { path: 'contributions', component: ContributionsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
