import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { DeportesComponent } from '../components/deportescomponent/deportes.component';
import { FormsModule } from '@angular/forms';
import { HooksComponent } from '../components/hookscomponent/hooks.component';
import { PrimerComponent } from '../components/primercomponent/primer.component';
import {FormsBindingComponent} from '../components/formsbindingcomponent/forms.binding.component';

@NgModule({
  declarations: [
     App,
     DeportesComponent,
     HooksComponent,
     PrimerComponent,
     FormsBindingComponent

  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
