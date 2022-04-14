import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {CommonService, Message} from '../../../services/common.service';
import {Subscription} from 'rxjs';
import {MessagesService} from "../../../services/messages.service";
import {MessageData} from "../../../Types/MessageData";
import {Router} from "@angular/router";


@Component({
  selector: 'app-chat-area',
  templateUrl: './chat-area.component.html',
  styleUrls: ['./chat-area.component.scss']
})
export class ChatAreaComponent implements OnInit{
  @Input() randomSeed: string;
  subs!: Subscription;
  paramValue: string = "";
  roomName: string | undefined;
  chatId: number;

  constructor(private commonService: CommonService,
              private messagesService: MessagesService,
              private router: Router){
  }


  message_data: MessageData = new MessageData();

  ngOnInit(): void {
    this.subs = this.commonService.pathParam.subscribe(value => {
      this.paramValue = value;

    });
  }

  formSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const {message} = form.value;

    this.message_data.text = message;
    this.message_data.timeStamp = new Date();

    this.messagesService.sendMessage(+(this.paramValue), this.message_data).subscribe(
      data => {
        this.router.navigate([`room/${this.paramValue}`]);
      },
      error => console.log(error)
    );

    form.resetForm();
  }

  public chatData(event: any) {
    console.log('receive signal chat-area')
    if (event.chatData !== undefined) {
      event.chatData.subscribe((roomName: string) => this.roomName = roomName);
    }
  }
}
