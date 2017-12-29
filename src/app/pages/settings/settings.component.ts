import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from '../../services/chat.service';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  title = 'Instellingen';
  loading = false;
  responses = [];

  constructor(private router: Router, private cs: ChatService) {
    this.cs.messages.subscribe(msg => {
      console.log("Response from websocket: " + JSON.stringify(msg));
      this.responses.push(msg);
		});
  }

  private message = {
		author: 'tutorialedge',
		message: ''
	}

  sendMsg(msg) {
    this.message = { author: 'frank', message: msg};
		console.log('new message from client to websocket: ', JSON.stringify(this.message));
		this.cs.messages.next(this.message);
		this.message.message = '';
	}

  logOut(): void {
    // TODO: Log out via authentication service
    this.loading = true;
    console.log('Uitloggen...');
    setTimeout(() => {
      this.router.navigate(['/login']);
      this.loading = false;
      console.log('Uitgelogd!');
    }, 1500);
  }
}
