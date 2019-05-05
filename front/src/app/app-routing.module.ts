import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'connection',
    loadChildren: './components/connection/connection.module#ConnectionModule',
  },
  {
    path: '**',
    redirectTo: 'connection', // TODO add 404 page
  },
];

@NgModule(
  {
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
  }
)
export class AppRoutingModule {
}
