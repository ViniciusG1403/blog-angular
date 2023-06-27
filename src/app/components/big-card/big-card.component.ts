import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent {
  @Input() imgSrc: string = '';
  @Input() titleNotice: string = '';
  @Input() resumeNotice: string = '';
  @Input() idNotice: string = '';
}
