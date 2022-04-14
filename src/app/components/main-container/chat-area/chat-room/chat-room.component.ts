import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {CommonService} from '../../../../services/common.service';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {Subscription} from 'rxjs';
import {Message, User} from "../../../../services/common.service";
import {MessagesService} from "../../../../services/messages.service";
import {getMatIconFailedToSanitizeLiteralError} from "@angular/material/icon";
import {ChatsService} from "../../../../services/chats.service";

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent {
  subs: Subscription[] = [];
  item! : any;
  isUser: string;
  messages: Message[] = [];

  @Output() chatData: EventEmitter<any> = new EventEmitter<any>();

  constructor(private commonService: CommonService,
              private messagesService: MessagesService,
              private chatsService: ChatsService,
              private route: ActivatedRoute) {
    // this.isUser = JSON.parse(localStorage.getItem('user')); //TODO
    this.getMessagesForIdChat(1)
    // @ts-ignore
    this.isUser = localStorage.getItem('userName')
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

    this.subs.push(
      this.route.params.subscribe(par => {
        this.chatsService.getChatList().subscribe(data => {
            this.item = data.list[par['id'] - 1]
            this.chatData.emit(this.item.name);
          }, error => console.log(error)
        );
      }),
      this.route.params.subscribe(par => {
          this.getMessagesForIdChat(par['id'])
      }
      ));
  }

  private getMessagesForIdChat(id_chat: number) {
    this.messagesService.getMessagesForId(id_chat) //TODO
      .subscribe(data => {
        this.messages = []
        for (let i = 0; i < data.length; i++)
        {
          let dictMessage = data[i]
          // @ts-ignore
          this.messages.push({sender: dictMessage['creator'], message: dictMessage['text'], timestamp: dictMessage['time_stamp']})
        }
    }, error => console.log(error)
    )
  }
}
