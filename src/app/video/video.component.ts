import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit, OnChanges{
  @Input()  video:string;
  videoId: string;

  apiLoaded = false;

  ngOnChanges(changes: SimpleChanges) {
    console.log("teste");
    const splitted = changes['video'].currentValue.split('/');
    this.videoId = splitted[splitted.length-1];
    console.log(this.videoId);
  }

  ngOnInit(){

    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }
}
