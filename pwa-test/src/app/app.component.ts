import { Component,  OnInit } from '@angular/core';


@Component({
    selector: 'app-root',
  
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',

})
export class AppComponent implements OnInit {
  title = 'pwa-test';
  isOnline = false;
  
  

  ngOnInit(): void {
    this.updateOnlineStatus();
    
    window.addEventListener('online',  this.updateOnlineStatus.bind(this));
    window.addEventListener('offline', this.updateOnlineStatus.bind(this));
  }

  updateOnlineStatus() {
    this.isOnline = window.navigator.onLine;
    console.info(`isOnline=[${this.isOnline}]`);
  }


}
