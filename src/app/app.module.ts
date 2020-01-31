import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImaskComponent } from './imask/imask.component';
import { TextMaskComponent } from './text-mask/text-mask.component';
import { InputMaskComponent } from './input-mask/input-mask.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HosterComponent } from './hoster/hoster.component';
import { CleaveJsComponent } from './cleave-js/cleave-js.component';
import { CpfDirective } from './directives/cpf.directive';
import { CnpjDirective } from './directives/cnpj.directive';

@NgModule({
  declarations: [
    AppComponent,
    ImaskComponent,
    TextMaskComponent,
    InputMaskComponent,
    HosterComponent,
    CleaveJsComponent,
    CpfDirective,
    CnpjDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
