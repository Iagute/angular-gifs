import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html'
})
export class LazyImageComponent implements OnInit {
  @Input()
  public url!: string;
  @Input()
  public alt: string = `${this.url}`;
  ngOnInit(): void {
    if( !this.url ) throw new Error('Url property is required')
  }

  public hasLoaded: boolean = false;

  onLoad() {
    console.log('Image Loaded')
    this.hasLoaded = true;
  }





}
