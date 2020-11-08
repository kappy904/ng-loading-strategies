import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HuracanComponent } from './huracan.component'

const routes: Routes = [{ path: '', component: HuracanComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HuracanRoutingModule {}
