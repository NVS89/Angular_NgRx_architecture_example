import { MenuItem } from 'primeng/api';
import { IRecipe } from './../../models/recipe.interfase';
import { Component, OnInit, Input, ElementRef, Output, EventEmitter } from '@angular/core';

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

    @Output() selectedRecordChange: EventEmitter<IRecipe> = new EventEmitter<IRecipe>();

    get selectedRecord(): IRecipe{
        return this._selectedRecord;
    }

    set selectedRecord(value: IRecipe){
        this._selectedRecord = value;
        this.selectedRecordChange.emit(value);
    }

    _selectedRecord: IRecipe;
    _cols: string[] = [];
    _itemList: any[] = [];

    constructor() { }

    ngOnInit(): void {}

}
