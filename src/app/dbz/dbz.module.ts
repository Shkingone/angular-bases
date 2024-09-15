import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './pages/main-page.component';
import { LlistComponent } from './components/llist/llist.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';


@NgModule({
  declarations: [
    MainPageComponent,


  ],
  imports: [
    CommonModule,
    LlistComponent,
    AddCharacterComponent,
],
  exports:[
    MainPageComponent
  ]
})
export class DbzModule { }
