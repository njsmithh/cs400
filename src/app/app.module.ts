import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ValidFormComponent } from './valid-form/valid-form.component';
import { VisualizeComponent } from './visualize/visualize.component';

@NgModule({
  declarations: [
    AppComponent,
    ValidFormComponent,
    VisualizeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
