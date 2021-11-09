import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-lockscreen',
    templateUrl: 'lockscreen.component.html'
})
export class LockscreenComponent implements OnInit {
    userImg: string = './assets/demo/img/profile-pics/8.jpg';

    constructor() {
    }

    ngOnInit() {
    }

}
