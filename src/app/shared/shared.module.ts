import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AngularMaterialModule } from './angular-material.module';
import { ToastComponent } from './components/toast/toast.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule,
    AngularMaterialModule,
    ToastComponent,
  ],
  exports: [
    CommonModule,
    TranslateModule,
    AngularMaterialModule,
    ToastComponent,
  ],
})
export class SharedModule {}
