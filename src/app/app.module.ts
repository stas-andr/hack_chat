import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MaterialModule} from './shared/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { MainContainerComponent } from "./components/main-container/main-container.component";
import {SidebarComponent} from './components/main-container/sidebar/sidebar.component';
import {SidebarContentComponent} from './components/main-container/sidebar/sidebar-content/sidebar-content.component';
import {ChatAreaComponent} from './components/main-container/chat-area/chat-area.component';
import {ChatDefaultPageComponent} from './components/main-container/chat-area/chat-default-page/chat-default-page.component';
import {ChatRoomComponent} from './components/main-container/chat-area/chat-room/chat-room.component';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {initializeKeycloak} from "./utility/app.init";

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    SidebarComponent,
    SidebarContentComponent,
    ChatAreaComponent,
    ChatDefaultPageComponent,
    ChatRoomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
