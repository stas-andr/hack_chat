import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CommonService, Message} from "./common.service";

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private httpClient: HttpClient,
              private commonServese: CommonService) { }

  getMessagesForId(id_chat: number): Observable<Message[]> {
    return this.httpClient.get<Message[]>(`${this.commonServese.getBaseUrl()}/chats/${id_chat}`)
}
}
