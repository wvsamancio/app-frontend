import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { InfosComponent } from './infos/infos.component';
import { ContributionsComponent } from './contributions/contributions.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PagesRoutingModule } from './pages-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    InfosComponent,
    ContributionsComponent,
    ContactsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
