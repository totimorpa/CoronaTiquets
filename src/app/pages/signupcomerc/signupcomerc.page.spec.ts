import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignupcomercPage } from './signupcomerc.page';

describe('SignupcomercPage', () => {
  let component: SignupcomercPage;
  let fixture: ComponentFixture<SignupcomercPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupcomercPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupcomercPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
