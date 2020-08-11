import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

    @Input() set linkList(value: { label: string, path: string }) {
        this._linkList = value;
    }

    get linkList(): { label: string, path: string } {
        return this._linkList;
    }
    _linkList: {
        label: string,
        path: string
    };

    constructor() { }

    ngOnInit(): void {
    }

}
