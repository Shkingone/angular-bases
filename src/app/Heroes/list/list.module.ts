import { NgModule } from '@angular/core';
import { ListComponent } from './list.component';
import { HeroesModule } from '../heroes.module';


@NgModule({
  declarations:[
    ListComponent,
  ],

  exports:[
  ListComponent,
  ],


})
export class ListModule{


}
