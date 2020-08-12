import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ReviewRecipieComponent } from '../recipes/review-recipie/review-recipie.component';

describe('ReviewRecipieComponent', () => {
    let component: ReviewRecipieComponent;
    let fixture: ComponentFixture<ReviewRecipieComponent>;
    let store: MockStore;
    const initialState = {
        recipes: {
            recipes: []
        }
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ReviewRecipieComponent],
            providers: [
                provideMockStore({ initialState })
            ]
        })
            .compileComponents();
        store = TestBed.inject(MockStore);
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ReviewRecipieComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
