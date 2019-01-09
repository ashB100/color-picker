import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Color Picker';
  pickedColor = '#ff0080';

  onPickColor(payload) {
    this.pickedColor = payload;
  }
}
