import {Component, OnInit} from '@angular/core';
import {WebsocketService} from './websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  messages: string[] = [];
  constructor(private webSocketService: WebsocketService){}
  ngOnInit(): void {
    this.webSocketService.connect()
      .subscribe(evt => {
        this.messages.push(evt.data);
      });
  }
  sendMessage(message: string) {
    this.webSocketService.sendMessage(message);
  }
}
