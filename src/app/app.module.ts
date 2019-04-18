import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { CityFormComponent } from './components/city-form/city-form.component';
import { HeaderComponent } from './components/header/header.component';
import { PlugResultComponent } from './components/plug-result/plug-result.component';
import { PlugReferenceComponent } from './components/plug-reference/plug-reference.component';
import { SlashJoinPipe } from './pipes/slash-join.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CityFormComponent,
    HeaderComponent,
    PlugResultComponent,
    PlugReferenceComponent,
    SlashJoinPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
