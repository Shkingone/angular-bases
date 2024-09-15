import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-llist',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './llist.component.html',
  styleUrl: './llist.component.css',
})
export class LlistComponent {

  @Input()
  public characterList:Character[] = [{
    name: 'Trunks',
    power: 10
  }]
}
