import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-item-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
    @Input()
    set itemList(value: any[]) {
        this._itemList = value;
    }

    get itemList(): any[] {
        return this._itemList;
    }

    @Input()
    set columns(value: any[]) {
        this._cols = value;
    }

    get columns(): any[] {
        return this._cols;
    }

    _cols: string[] = [];
    _itemList: any[] = [];

    constructor() { }

    ngOnInit(): void {
    }

}
