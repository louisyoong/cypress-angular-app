import { Component } from '@angular/core';

@Component({
  selector: 'app-click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.scss'],
})
export class ClickComponent {
  showHello: boolean = false;
  showInputDbClick: boolean = false;
  showInputRightClick: boolean = false;
  inputValue: string = '';

  onSingleClick() {
    this.showHello = !this.showHello;
  }

  onDoubleClick() {
    this.showInputDbClick = true;
  }

  onRightClick(event: MouseEvent) {
    event.preventDefault();
    this.showInputRightClick = true;
  }
}
