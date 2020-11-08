import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AventadorComponent } from './aventador.component'

const routes: Routes = [{ path: '', component: AventadorComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AventadorRoutingModule {}
