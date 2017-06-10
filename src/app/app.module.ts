import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component'
import { RouterModule } from '@angular/router';

import { HeroService } from './hero.service';

@NgModule({
  imports:      [ BrowserModule,
                  RouterModule.forRoot([
                 {
                    path: 'heroes',
                    component: HeroesComponent
                  },
                  {
                    path: 'dashboard',
                    component: DashboardComponent
                  },
                  {
                    path: '',
                    redirectTo: '/dashboard',
                    pathMatch: 'full'
                  },
                  {
                    path: 'detail/:id',
                    component: HeroDetailComponent
                   }
                  ]),
                  FormsModule ],
  declarations: [ AppComponent,
                  DashboardComponent,
                  HeroDetailComponent,
                  HeroesComponent
                   ],
  providers:    [ HeroService ],
  bootstrap:    [ AppComponent ]
})


export class AppModule { }
