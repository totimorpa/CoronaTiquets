import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tiquets',
  templateUrl: './tiquets.page.html',
  styleUrls: ['./tiquets.page.scss'],
})
export class TiquetsPage implements OnInit {

  constructor(
    public router: Router,
  ) {}


  ngOnInit() {
  }
  botiga() {
    this.router.navigateByUrl('/botiga');
  }
  tiquets() {
    this.router.navigateByUrl('/tiquets');
  }
  calendari() {
    this.router.navigateByUrl('/calendari')
  }
}
