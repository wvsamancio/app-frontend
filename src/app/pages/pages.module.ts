import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfosComponent } from './infos/infos.component';
import { ContributionsComponent } from './contributions/contributions.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { ContributeComponent } from './contribute/contribute.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    InfosComponent,
    ContributionsComponent,
    ContactsComponent,
    ContributeComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class PagesModule { }
