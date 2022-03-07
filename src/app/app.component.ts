import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Glückspilzzauber';

  code = new FormControl('');

  constructor(private _router: Router) {}

  onSubmit() {
    if (this.code.value === '55555') {
      this._router.navigate(['podcast']);
    }
  }
}
