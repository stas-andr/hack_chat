import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  // 1. Authentication
  // 2. Storing the route param value, room/:id -> id value

  private pathParamState = new BehaviorSubject<string>('');
  private baseURL = "http://10.17.0.218:8080/api/v1";
  pathParam: Observable<string>;

  constructor(private router: Router) {
    this.pathParam = this.pathParamState.asObservable();
  }

  public getBaseUrl() {
    return this.baseURL
  }
  loginWithGoogle(): void {

  }

  logout(): void {

  }

  updatePathParamState(newPathParam: string | null): void {
    if (newPathParam != null) {
      this.pathParamState.next(newPathParam);
    }
  }


}

export interface RoomData {
  name: string;
  id?: string;
}

export class User {
  id: number | undefined;
  name: string | undefined;
  // @ts-ignore
  avatar: URL;
  friends?: User[]
}

export class Message {
  sender: User | undefined;
  message: any;
  time: Date | undefined;
}

export interface Chat {
  name: string;
  id?: string;
}
