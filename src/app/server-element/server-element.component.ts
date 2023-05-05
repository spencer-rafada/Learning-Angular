import {
  Component,
  Input,
  ViewEncapsulation,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  // encapsulation: ViewEncapsulation.None,
  // encapsulation: ViewEncapsulation.Native, shadow DOM technology
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy
{
  @Input('serverElement') element: {
    type: string;
    name: string;
    content: string;
  };
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log(`constructor called`);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(`onChanges called`);
  }

  ngOnInit() {
    console.log('ngOnInit called');
  }

  ngDoCheck() {
    console.log(`doChange called`);
  }

  ngAfterContentInit(): void {
    console.log(`ngContentAfter Init called`);
  }

  ngAfterContentChecked(): void {
    console.log(`ngContentAfterChecked called`);
    console.log(this.paragraph.nativeElement.textContent);
  }
  ngAfterViewInit(): void {
    console.log(`ngAfterViewInit called`);
    console.log(this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log(`ngAfterViewChecked called`);
  }

  ngOnDestroy(): void {
    console.log(`ngDestroy`);
  }
}
