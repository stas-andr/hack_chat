import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {CommonService} from '../../../../services/common.service';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {Subscription} from 'rxjs';
import {Message, User} from "../../../../services/common.service";
import {MessagesService} from "../../../../services/messages.service";
import {getMatIconFailedToSanitizeLiteralError} from "@angular/material/icon";

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent {
  subs: Subscription[] = [];
  item! : any;
  isUser: undefined
  messages: Message[] = [];

  constructor(private commonService: CommonService,
              private messagesService: MessagesService,
              private route: ActivatedRoute) {
    // this.isUser = JSON.parse(localStorage.getItem('user')); //TODO
    this.getMessagesForIdChat(1)
  }

  ngOnInit(): void {
    this.subs.push(this.route.paramMap
      .pipe(
        map(paramMap => paramMap.get('id'))
      )
      .subscribe(routePathParam =>
      {
        this.commonService.updatePathParamState(routePathParam)
      }));
  }

  private getMessagesForIdChat(id_chat: number) {
    this.messagesService.getMessagesForId(id_chat) //TODO
      .subscribe(data => {
        console.log(data)
        for (let i = 0; i < data.length; i++)
        {
          let dictMessage = data[i]
          // @ts-ignore
          this.messages.push({sender: dictMessage['creator'], message: dictMessage['text'], time: dictMessage['time_stamp']})
        }
        console.log(this.messages)
    }, error => console.log(error)
    )
  }

  @Output() chatData: EventEmitter<any> = new EventEmitter<any>();
}
