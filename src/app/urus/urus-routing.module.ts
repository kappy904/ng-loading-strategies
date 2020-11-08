import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { UrusComponent } from './urus.component'

const routes: Routes = [{ path: '', component: UrusComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UrusRoutingModule {}
