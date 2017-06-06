import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactsComponent } from './contacts/contacts.component';
import { GoodsComponent } from './goods/goods.component';

import { CoffeeshopComponent } from './coffeeshop/coffeeshop.component';
import { CoffeeshopDetailComponent } from './coffeeshop/coffeeshop-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/coffeeshop', pathMatch: 'full' },
  { path: 'contacts',  component: ContactsComponent },
  { path: 'goods',     component: GoodsComponent },
  { path: 'coffeeshop',     component: CoffeeshopComponent },
  { path: 'detail/:id', component: CoffeeshopDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
}
