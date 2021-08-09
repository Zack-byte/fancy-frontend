import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules,
    relativeLinkResolution: 'legacy'
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
