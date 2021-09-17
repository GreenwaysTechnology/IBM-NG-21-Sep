import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GreeterComponent } from './greeter.component';
import { HaiComponent } from './hai.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home.component';
import { MessageComponent } from './message.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { UserregisterationComponent } from './userregisteration.component';

//mapping component with url
const routes: Routes = [
  {
    //index path - /
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  // {
  //   path: 'heroes',
  //   loadChildren: () => import('./heroes/heroes.module').then(m => 
  //     {
  //       console.log('loading...' ,m.HeroesModule)
  //       return m.HeroesModule
  //     }),
  // },
  {
    path: 'form', component: UserregisterationComponent
  },
  {
    //named path
    path: 'home', component: HomeComponent
  },

  {
    path: 'greeter', component: GreeterComponent,
    children: [
      {
        path: '', redirectTo: '/greeter/hai', pathMatch: 'full'
      },
      {
        path: 'hai', component: HaiComponent,
      },
      {
        path: 'hello', component: HelloComponent,
      },
    ]
  },
  //dynamic url
  {
    path: 'greeting/:message', component: MessageComponent
  },
  //page not found
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
