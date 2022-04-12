import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Chat, CommonService, RoomData} from '../../../services/common.service';
import {map, tap} from 'rxjs/operators';
import {Subscription} from 'rxjs';
import {ChatsService} from "../../../services/chats.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [
    ChatsService
  ]
})
export class SidebarComponent implements OnInit, OnDestroy {
  randomSeed: any[] = [];
  chats: Chat[] = [
    {name: "Дождиков Валера", id: "45"},
    {name: "Николаев Федор Михайлович", id: "2"},
    {name: "Бритик Олег Николаевич>", id: "3"},
    {name: "Бананов Виктор Вадимович", id: "4"},
    {name: "Люлекина Светлана Дмитриевна", id: "5"},
  ];

  lastMessage: string = "";
  subs: Subscription[] = [];
  @Output() seedValue: EventEmitter<string> = new EventEmitter<string>();

  constructor(private commonService: CommonService,
              private chatsService: ChatsService) {
    this.getChatList()
  }

  ngOnInit(): void {

    // Generate 20 random values and store it in the randomSeed array
    this.randomSeed = Array.from({length: 20}, () => Math.floor(Math.random() * 14578976));
  }

  onFormSubmit(form: NgForm): void {
    const {search} = form.value;
    console.log(search);

    if (form.invalid) {
      return;
    }
  }

  private getChatList() {
    this.chatsService.getCardList().subscribe(data => {
        this.chats = data;
        console.log(data);
      }, error => console.log(error)
    );
  }

  ngOnDestroy(): void {
    this.subs.map(s => s.unsubscribe());
  }

  seedData(ev: string): void {
    this.seedValue.emit(ev);
  }

  logout(): void {
    this.commonService.logout();
  }
}
