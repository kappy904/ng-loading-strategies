import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { HuracanRoutingModule } from './huracan-routing.module'
import { HuracanComponent } from './huracan.component'

@NgModule({
  declarations: [HuracanComponent],
  imports: [CommonModule, HuracanRoutingModule]
})
export class HuracanModule {}
