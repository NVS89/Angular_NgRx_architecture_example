import { MenuItem } from 'primeng/api';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

    @Input() menu: Array<MenuItem>;

    @Output() selectedRecordChange: EventEmitter<any> = new EventEmitter<any>();

    get selectedRecord(): any{
        return this._selectedRecord;
    }

    set selectedRecord(value: any){
        this._selectedRecord = value;
        this.selectedRecordChange.emit(value);
    }

    _selectedRecord: any;
    _cols: string[] = [];
    _itemList: any[] = [];

    constructor() { }

    ngOnInit(): void {}

}
