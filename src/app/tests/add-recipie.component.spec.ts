import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AddRecipieComponent } from '../recipes/add-recipie/add-recipie.component';

describe('AddRecipieComponent', () => {
    let component: AddRecipieComponent;
    let fixture: ComponentFixture<AddRecipieComponent>;
    let store: MockStore;
    const initialState = {
        recipes: {
            recipes: []
        }
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AddRecipieComponent],
            providers: [
                provideMockStore({ initialState })
            ],
            imports: [
                RouterTestingModule.withRoutes([]),
            ]
        })
            .compileComponents();
        store = TestBed.inject(MockStore);
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddRecipieComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
