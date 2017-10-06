import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EasyCarouselModule } from 'easy-carousel/build/easy-carousel.module'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EasyCarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
