import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

    @Input() set itemList(value: { label: string, path: string }) {
        this._itemList = value;
    }

    get itemList(): { label: string, path: string } {
        return this._itemList;
    }
    _itemList: {
        label: string,
        path: string 
    };

    constructor() { }

    ngOnInit(): void {
    }

}
