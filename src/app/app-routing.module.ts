import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ContactsComponent} from './contacts/contacts.component';
import {GoodsComponent} from './goods/goods.component';


const routes: Routes = [
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: 'contacts',  component: ContactsComponent },
  { path: 'goods',     component: GoodsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
}
