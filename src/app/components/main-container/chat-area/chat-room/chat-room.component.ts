import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {CommonService} from '../../../../services/common.service';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {Subscription} from 'rxjs';
import {Message} from "../../../../data-types/types";

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent {
  subs: Subscription[] = [];
  item! : any;
  messages: Message[] = [
    {
      name: { name: 'Иванов Владислав', id: 1, avatar: new URL('https://www.w3schools.com/howto/img_avatar.png')},
      message: 'Привет, как дела?',
      time: new Date()
    }
  ]
  ;

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

  @Output() chatData: EventEmitter<any> = new EventEmitter<any>();
}
