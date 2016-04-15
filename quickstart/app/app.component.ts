import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
})

export class AppComponent {
    title = 'Sample Title';
    hero: Hero = {
        id: 1,
        name: 'Edward'
    };
}

export class Hero {
    id: number;
    name: string;
}