import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:
    `
    <ul>
      <li><a router-link="/">Home</a></li>
      <li><a router-link="/about">About</a></li>
    </ul>
    <router-outlet></router-outlet>`,
})
export class AppComponent  {

}
