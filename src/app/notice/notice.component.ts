import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { mainNotice, noticeList } from '../shared/notices';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css'],
})
export class NoticeComponent {
  notice: any;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      const { id } = params;

      const noticia = noticeList.find((notice) => notice.idNotice === id);

      if (!noticia) {
        this.notice = mainNotice;
      } else {
        this.notice = noticia;
      }
      console.log(this.notice);
    });
  }
}
