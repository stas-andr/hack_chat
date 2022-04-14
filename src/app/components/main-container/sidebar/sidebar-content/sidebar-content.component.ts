import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Chat, RoomData} from '../../../../services/common.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-sidebar-content',
  templateUrl: './sidebar-content.component.html',
  styleUrls: ['./sidebar-content.component.scss']
})
export class SidebarContentComponent implements OnInit {

  @Input() chatData: Chat;
  @Input() randomSeed: string = "";

  @Output() seedValue: EventEmitter<string> = new EventEmitter<string>();

  lastMessage!: string;
  subs!: Subscription;

  constructor() {
  }

  ngOnInit(): void {
    this.lastMessage = 'I am last message'
  }

  onClick(): void {
    this.seedValue.emit(this.randomSeed);
    console.log('emit onClick sidebar-content')
    console.log(this.chatData.name)
    localStorage.setItem('chatName', this.chatData.name)
  }
}
