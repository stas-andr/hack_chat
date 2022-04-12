import { Injectable } from '@angular/core';
import {Chat} from "./common.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  private baseURL = "http://10.17.0.218:8080/api/v1";
  constructor(private httpClient: HttpClient) { }

  getCardList(): Observable<Chat[]> {
    console.log(this.httpClient.get<Chat[]>(`${this.baseURL}/chats`))
    return this.httpClient.get<Chat[]>(`${this.baseURL}/chats`)
  }
}
