import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ThirdComponent } from './third/third.component';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, FirstComponent, SecondComponent, ThirdComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
