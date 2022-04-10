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
  pathParam: Observable<string>;


  constructor(private router: Router) {
    this.pathParam = this.pathParamState.asObservable();
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
