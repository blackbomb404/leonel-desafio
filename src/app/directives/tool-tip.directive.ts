import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appToolTip]',
  standalone: true
})
export class ToolTipDirective implements AfterViewInit {
  @Input() appToolTip = '';
  host!: HTMLElement;

  constructor(private hostRef: ElementRef) {
    this.host = hostRef.nativeElement as HTMLElement;
  }

  ngAfterViewInit(): void {
    this.host.classList.add('tooltip');
    this.host.style.setProperty('--tooltip-message', `"${this.appToolTip}"`);
  }

}
