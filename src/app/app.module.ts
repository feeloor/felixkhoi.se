import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MaterialModule } from '@felixkhoi/material.module';
import { AppComponent } from '@felixkhoi/app.component';
import { MenuComponent } from '@felixkhoi/menu/menu.component';
import { ContentComponent } from '@felixkhoi/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
