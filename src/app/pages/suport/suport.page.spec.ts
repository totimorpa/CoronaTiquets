import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuportPage } from './suport.page';

describe('SuportPage', () => {
  let component: SuportPage;
  let fixture: ComponentFixture<SuportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
