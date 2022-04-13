import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {CommonService, Message} from '../../../services/common.service';
import {Subscription} from 'rxjs';
import {MessagesService} from "../../../services/messages.service";
import {MessageData} from "../../../Types/MessageData";


@Component({
  selector: 'app-chat-area',
  templateUrl: './chat-area.component.html',
  styleUrls: ['./chat-area.component.scss']
})
export class ChatAreaComponent implements OnInit {
  @Input() randomSeed: string = "";
  subs!: Subscription;
  paramValue: string = "";
  roomName: string = "";
  chatId: number;

  constructor(private commonService: CommonService,
              private messagesService: MessagesService) {
  }


  message_data: MessageData = new MessageData();

  ngOnInit(): void {
    this.subs = this.commonService.pathParam.subscribe(value => {
      console.log('chat-area.component', this.paramValue)
      this.paramValue = value;
    });
  }

  formSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    console.log('formSubmitting')

    const {message} = form.value;

    this.message_data.text = message;
    this.message_data.timeStamp = new Date();

    this.messagesService.sendMessage(+(this.paramValue), this.message_data).subscribe(
      data => {
        console.log(data)

      },
      error => console.log(error)
    );


    form.resetForm();
  }

  chatData(ev: any): void {
    console.log('activated chatData');
    if (ev.chatData !== undefined) {
      ev.chatData.subscribe((roomName: string) => this.roomName = roomName);
    }
  }
}
