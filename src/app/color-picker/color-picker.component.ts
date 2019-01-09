import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {
  @Input() pickedColor;
  @Output() pickColor: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onPickColor(event) {
    this.pickColor.emit(event.target.value);
  }

}
