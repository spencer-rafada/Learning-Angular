import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  // encapsulation: ViewEncapsulation.None,
  // encapsulation: ViewEncapsulation.Native, shadow DOM technology
})
export class ServerElementComponent {
  @Input('serverElement') element: {
    type: string;
    name: string;
    content: string;
  };
}
