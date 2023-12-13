// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DrawNameComponent } from './draw-name/draw-name.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DrawNameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
