import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { CityFormComponent } from './components/city-form/city-form.component';
import { HeaderComponent } from './components/header/header.component';
import { PlugResultComponent } from './components/plug-result/plug-result.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CityFormComponent,
    HeaderComponent,
    PlugResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
