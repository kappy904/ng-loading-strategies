import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {
    path: 'aventador',
    loadChildren: () => import('./aventador/aventador.module').then(m => m.AventadorModule)
  }, {
    path: 'huracan',
    loadChildren: () => import('./huracan/huracan.module').then(m => m.HuracanModule)
  }, {
    path: 'urus',
    loadChildren: () => import('./urus/urus.module').then(m => m.UrusModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
