import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent {
  showMessage = false;
  clickLogs = [];

  onButtonClick() {
    this.showMessage = !this.showMessage;
    // this.clickLogs.push(this.clickLogs.length + 1);
    this.clickLogs.push(new Date());
  }
}
