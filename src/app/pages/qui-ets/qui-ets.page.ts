import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-qui-ets',
  templateUrl: './qui-ets.page.html',
  styleUrls: ['./qui-ets.page.scss'],
})
export class QuiEtsPage implements OnInit {

  constructor(
    public router: Router,
    private menu: MenuController
  ) {}


  ngOnInit() {
  }
  user() {
    this.router.navigateByUrl('/app/tabs/botigues');
    this.menu.enable(true)
  }
  shop() {
    this.router.navigateByUrl('/signupcomerc');
  }
}
