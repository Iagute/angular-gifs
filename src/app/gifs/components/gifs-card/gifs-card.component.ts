import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gif.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html'
})
export class GifsCardComponent implements OnInit {

  @Input()
  public gif!: Gif;

  ngOnInit(): void {
    if (!this.gif) throw new Error('Falta el componente Gif!!')
  }

}
