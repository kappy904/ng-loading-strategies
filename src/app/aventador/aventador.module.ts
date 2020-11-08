import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AventadorRoutingModule } from './aventador-routing.module'
import { AventadorComponent } from './aventador.component'

@NgModule({
  declarations: [AventadorComponent],
  imports: [CommonModule, AventadorRoutingModule]
})
export class AventadorModule {}
