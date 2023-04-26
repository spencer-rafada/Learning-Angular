import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css'],
})
export class DatabindingComponent {
  username: string = '';
  isBtnActive: boolean = false;

  onAddUser() {
    this.username = '';
  }
}
