import { Component } from "@angular/core";
import { SemanticMenuComponent } from 'ng-semantic'

@Component({
    selector: 'app-header',
    template: `
    <sm-menu title="Angular2" class="inverted teal" logo="https://ng-semantic.herokuapp.com/demo/assets/images/semantic.png">
        <a sm-item *ngFor="let item of items" [icon]="item.icon">{{item?.title}}</a>

            <nav class="col-md-8 col-md-offset-2">
                <ul class="nav">
                    <li routerLinkActive="active"><a [routerLink]="['/messages']">Messenger</a></li>
                    <li routerLinkActive="active"><a [routerLink]="['/auth']">Authentication</a></li>
                </ul>
            </nav>
    <sm-menu class="menu right secondary">
        <a sm-item href="#/elements/menu" 
            image="http://semantic-ui.com/images/avatar/small/stevie.jpg">Elliot Fu</a>
        <a sm-item icon="sidebar big"></a>
    </sm-menu>
    </sm-menu>
    `
})

export class HeaderComponent{

}
