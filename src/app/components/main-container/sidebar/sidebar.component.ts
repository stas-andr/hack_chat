import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Chat, Chats, CommonService, RoomData} from '../../../services/common.service';
import {map, tap} from 'rxjs/operators';
import {Subscription} from 'rxjs';
import {ChatsService} from "../../../services/chats.service";
import {KeycloakService} from "keycloak-angular";

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
  chats: Chats;

  lastMessage: string = "";
  subs: Subscription[] = [];
  loggedUserName = "";

  @Output() seedValue: EventEmitter<string> = new EventEmitter<string>();

  constructor(private commonService: CommonService,
              private chatsService: ChatsService,
              private keycloakService: KeycloakService) {
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
        localStorage.setItem('userName', this.chats.user_name)
        this.loggedUserName = this.chats.user_name
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
