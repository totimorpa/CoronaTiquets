import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuiEtsPage } from './qui-ets.page';

describe('QuiEtsPage', () => {
  let component: QuiEtsPage;
  let fixture: ComponentFixture<QuiEtsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuiEtsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuiEtsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
