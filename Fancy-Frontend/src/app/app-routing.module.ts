import { ProjectsPageModule } from './components/projects-page/projects-page.module';
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
    },

    // ----- PROJECTS ----- //
    {
      path: 'projects',
      loadChildren: () =>
        import('./components/projects-page/projects-page.module').then((m) => m.ProjectsPageModule)
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
