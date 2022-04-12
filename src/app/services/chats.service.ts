import { Injectable } from '@angular/core';
import {Chat, CommonService} from "./common.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChatsService {
  constructor(private httpClient: HttpClient,
              private commonService: CommonService) { }

  getCardList(): Observable<Chat[]> {
    return this.httpClient.get<Chat[]>(`${this.commonService.getBaseUrl()}/chats`)
  }
}
