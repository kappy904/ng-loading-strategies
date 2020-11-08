import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UrusRoutingModule } from './urus-routing.module'
import { UrusComponent } from './urus.component'

@NgModule({
  declarations: [UrusComponent],
  imports: [CommonModule, UrusRoutingModule]
})
export class UrusModule {}
