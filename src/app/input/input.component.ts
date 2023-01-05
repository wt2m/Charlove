import { Component, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Output() value = new EventEmitter<string>();
  @Input() inputType: string = "Text";
  @Input() label: string = "";
  inputValue: string = "";


}
