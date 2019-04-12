import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { Configuration } from './util/endpoint/configuration';
import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './editar/editar.component';

import {DragDropModule} from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DragDropModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [ Configuration],
  bootstrap: [AppComponent]
})
export class AppModule { }
