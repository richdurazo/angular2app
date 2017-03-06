import { Component } from "@angular/core";
import { SemanticMenuComponent } from 'ng-semantic'

@Component({
    selector: 'app-header',
    template: `
  <div class="ui teal inverted menu">
  <a class="item">
    <img src="https://ng-semantic.herokuapp.com/demo/assets/images/semantic.png">
  </a>
    <a class="item" routerLinkActive="active" [routerLink]="['/messages']">Messenger</a>
    <a class="item" routerLinkActive="active" [routerLink]="['/profile']">Profile</a>

        <a class="item" routerLinkActive="active" [routerLink]="['/auth']">Sign-In</a>

  </div>
    `
})

export class HeaderComponent{

}
