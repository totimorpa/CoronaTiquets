import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-qui-ets',
  templateUrl: './qui-ets.page.html',
  styleUrls: ['./qui-ets.page.scss'],
})
export class QuiEtsPage implements OnInit {

  constructor(
    public router: Router,
  ) {}


  ngOnInit() {
  }
  user() {
    this.router.navigateByUrl('/app/tabs/schedule');
  }
  shop() {
    this.router.navigateByUrl('/signupcomerc');
  }
}
