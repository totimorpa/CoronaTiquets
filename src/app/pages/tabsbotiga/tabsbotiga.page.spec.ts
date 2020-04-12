import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabsbotigaPage } from './tabsbotiga.page';

describe('TabsbotigaPage', () => {
  let component: TabsbotigaPage;
  let fixture: ComponentFixture<TabsbotigaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsbotigaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabsbotigaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
