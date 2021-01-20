import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-main-toolbar [appName]="title"></app-main-toolbar>
    
    <div class= "content">
        <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'ERnetwork';
}
