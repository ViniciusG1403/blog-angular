import { Component } from '@angular/core';
import { mainNotice, noticeList } from '../shared/notices';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  bigCardNotice = mainNotice;

  smallCardNotices = noticeList;
}
