import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',

  children: [
    // ----- DEFAULT ----- //
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'home'
    },

    // ----- HOME ----- //
    {
      path: 'home',
      loadChildren: () => 
        import('./components/home-page/home-page.module').then((m) => m.HomePageModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
