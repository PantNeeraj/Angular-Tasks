import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MatButtonModule,FormsModule
  ]
})
export class SettingsModule { }
