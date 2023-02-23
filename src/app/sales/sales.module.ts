import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NotCommonssComponent } from './pages/not-commonss/not-commonss.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderComponent } from './pages/order/order.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { CapitalizedPipe } from './pipes/Capitalized.pipe';
import { FliesPipe } from './pipes/flies.pipe';
import { OrderPipe } from './pipes/order.pipe';

@NgModule({
  declarations: [
    NumbersComponent,
    NotCommonssComponent,
    BasicsComponent,
    OrderComponent,
    CapitalizedPipe,
    FliesPipe,
    OrderPipe,
  ],
  exports: [
    NumbersComponent,
    NotCommonssComponent,
    BasicsComponent,
    OrderComponent,
  ],
  imports: [CommonModule, PrimeNgModule],
})
export class SalesModule {}
