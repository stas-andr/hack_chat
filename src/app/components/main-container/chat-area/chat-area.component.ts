import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {CommonService} from '../../../services/common.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-chat-area',
  templateUrl: './chat-area.component.html',
  styleUrls: ['./chat-area.component.scss']
})
export class ChatAreaComponent implements OnInit {
  @Input() randomSeed: string = "";
  subs!: Subscription;
  paramValue: string = "";
  roomName: string = "";

  constructor(private commonService: CommonService,) {
  }

  ngOnInit(): void {
    this.subs = this.commonService.pathParam.subscribe(value => {
      this.paramValue = value;
    });
  }

  formSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const {message} = form.value;
    form.resetForm();
  }

  chatData(ev: any) :void {
    //TODO
  }
}
