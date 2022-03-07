import { Component } from '@angular/core';

const increment = (x: number) => ++x;
const resource = (x: number) => `../assets/Minutengeschichte${x}.mp3`;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Glückspilzzauber';
  sources = [...Array(10).keys()].map(increment).map(resource);
}
