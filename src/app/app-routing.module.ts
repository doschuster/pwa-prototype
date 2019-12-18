import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes = [
  { path: '', component: WelcomeComponent, text: 'Home', icon: 'k-i-globe-outline' },
  {
    path: 'data-form', loadChildren: () => import('./data-form/data-form.module').then(m => m.DataFormModule)
    , text: 'Post Form', icon: 'k-i-cloud'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
