import { NgModule } from '@angular/core';

//primeNg
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { MenubarModule } from 'primeng/menubar';
import { FieldsetModule } from 'primeng/fieldset';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    DividerModule,
    MenubarModule,
    FieldsetModule,
    ToolbarModule,
    TableModule,
  ],
})
export class PrimeNgModule {}
