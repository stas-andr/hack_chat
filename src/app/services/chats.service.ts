import { Injectable } from '@angular/core';
import {Chats, CommonService} from "./common.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChatsService {
  constructor(private httpClient: HttpClient,
              private commonService: CommonService) { }

  getChatList(): Observable<Chats> {
    return this.httpClient.get<Chats>(`${this.commonService.getBaseUrl()}/chats`)
  }
}
