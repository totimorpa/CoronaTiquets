import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TiquetsPage } from './tiquets.page';

describe('TiquetsPage', () => {
  let component: TiquetsPage;
  let fixture: ComponentFixture<TiquetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiquetsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TiquetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
