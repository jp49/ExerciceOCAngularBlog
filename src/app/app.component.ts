import { Component } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor() {
    var config = {
      apiKey: "AIzaSyAZKmKjTO3kc1lbmE7Kflzw3zkM99iH55E",
      authDomain: "http-client-demo-f9e24.firebaseapp.com",
      databaseURL: "https://http-client-demo-f9e24.firebaseio.com",
      projectId: "http-client-demo-f9e24",
      storageBucket: "http-client-demo-f9e24.appspot.com",
      messagingSenderId: "481298120513"
    };
    firebase.initializeApp(config);
  }
}
