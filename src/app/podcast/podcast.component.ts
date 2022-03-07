import { Component, OnInit } from '@angular/core';

const increment = (x: number) => ++x;
const resource = (x: number) => `../assets/Minutengeschichte${x}.mp3`;

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss'],
})
export class PodcastComponent implements OnInit {
  sources = [...Array(10).keys()].map(increment).map(resource);
  showMore = false;
  constructor() {}

  ngOnInit(): void {}
}
