import { Component } from '@angular/core';
@Component({
selector: 'app-counter',
  template: `

  <h3>
  Counter: {{counter}}
</h3>
<button (click)="drecrementBy()">-</button>
<button (click)="reset()">Reset</button>
<button (click)="incraseBy()">+</button>

  `
})
export class CounterComponent{


  public counter : number = 10;

incraseBy():void{
this.counter +=1;

}

drecrementBy():void{

  this.counter -= 1;
}

reset():void{
  this.counter = 10;
}

}
