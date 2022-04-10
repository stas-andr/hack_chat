import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {CommonService} from '../../../../services/common.service';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit, OnDestroy {
  subs: Subscription[] = [];
  item! : any;
  messageData: any[] = [];

  @Output() chatData: EventEmitter<any> = new EventEmitter<any>();

  constructor(private commonService: CommonService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.subs.push(this.route.paramMap
      .pipe(
        map(paramMap => paramMap.get('id'))
      )
      .subscribe(routePathParam => this.commonService.updatePathParamState(routePathParam)));

  }

  ngOnDestroy(): void {
    this.subs.map(s => s.unsubscribe());
  }

}
