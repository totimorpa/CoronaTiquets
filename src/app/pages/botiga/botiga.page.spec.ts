import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BotigaPage } from './botiga.page';

describe('BotigaPage', () => {
  let component: BotigaPage;
  let fixture: ComponentFixture<BotigaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotigaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BotigaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
