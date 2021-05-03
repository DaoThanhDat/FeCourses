import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { MaterialModule } from '../core/modules/metarial/material.module';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [NavComponent, FooterComponent],
  imports: [CommonModule],
  exports: [NavComponent, FooterComponent, CommonModule],
})
export class SharedModule {}
