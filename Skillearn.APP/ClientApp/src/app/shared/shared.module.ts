import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    SidebarModule,
    RouterModule,

  ],
  exports: [
    LayoutComponent,
  ]
})
export class SharedModule { }
