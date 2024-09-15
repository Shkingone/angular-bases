import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
import { CommonModule } from "@angular/common";
import { ListModule } from "./list/list.module";
import { HeroModule } from "./hero/hero.module";


@NgModule ({
declarations:[

  HeroComponent,
  ListComponent,
],
exports:[
  HeroComponent,
  ListComponent,
],


imports:[
  ListModule,
HeroModule,
  CommonModule
]

})
export class HeroesModule{


}
