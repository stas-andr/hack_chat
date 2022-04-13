import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CommonService, Message} from "./common.service";
import {MessageData} from "../Types/MessageData";

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private httpClient: HttpClient,
              private commonServese: CommonService) { }

  getMessagesForId(id_chat: number): Observable<Message[]> {
    return this.httpClient.get<Message[]>(`${this.commonServese.getBaseUrl()}/chats/${id_chat}`)
  }

  sendMessage(id_chat: number, message: MessageData) {
    console.log(message)
    return this.httpClient.post(`${this.commonServese.getBaseUrl()}/chats/${id_chat}/send`, message);
  }
}
