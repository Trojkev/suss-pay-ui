import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { DepositComponent } from './deposit/deposit.component';
import { HomeComponent } from './home/home.component';

const routes: Routes =[
    { path: 'home', component: HomeComponent},
    { path: 'profile', component: ProfileComponent },
    { path: 'deposit', component: DepositComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
