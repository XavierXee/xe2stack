import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent } from './game.component';
import { OptionsComponent } from './options.component';

// const appRoutes: Routes = [
//   { path: 'game', component: GameComponent },
//   { path: 'options',      component: OptionsComponent }
//   // {
//   //   path: 'heroes',
//   //   component: HeroListComponent,
//   //   data: { title: 'Heroes List' }
//   // },
//   // { path: '',
//   //   redirectTo: '/heroes',
//   //   pathMatch: 'full'
//   // }
// ];


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    OptionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
