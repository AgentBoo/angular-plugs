import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PlugReferenceComponent } from './components/plug-reference/plug-reference.component';
import { SlashJoinPipe } from './pipes/slash-join.pipe';
import { PlugCompatibilityComponent } from './components/plug-compatibility/plug-compatibility.component';
import { LocationFormComponent } from './components/location-form/location-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PlugReferenceComponent,
    SlashJoinPipe,
    PlugCompatibilityComponent,
    LocationFormComponent
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
