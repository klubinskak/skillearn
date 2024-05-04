import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
