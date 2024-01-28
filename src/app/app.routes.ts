import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'all', pathMatch: 'full' },
  {
    path: 'all',
    loadComponent: () =>
      import('./recipe-list/recipe-list.component').then(
        (c) => c.RecipeListComponent
      ),
  },
];
