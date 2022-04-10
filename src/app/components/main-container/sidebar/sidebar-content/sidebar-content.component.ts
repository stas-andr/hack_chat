import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RoomData} from '../../../../services/common.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-sidebar-content',
  templateUrl: './sidebar-content.component.html',
  styleUrls: ['./sidebar-content.component.scss']
})
export class SidebarContentComponent implements OnInit {

  @Input() roomData: RoomData = {name: "stas", id: "25"};
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
  }
}
