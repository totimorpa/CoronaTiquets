import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConferenceData } from '../../providers/conference-data';


@Component({
  selector: 'app-botiga',
  templateUrl: './botiga.page.html',
  styleUrls: ['./botiga.page.scss'],
})
export class BotigaPage implements OnInit {
  speakers: any[] = [];

  constructor(
    
    public router: Router,
    public confData: ConferenceData,
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
  ionViewDidEnter() {
    this.confData.getSpeakers().subscribe((speakers: any[]) => {
      this.speakers = speakers;
    });
  }
  merceria(a){
    return a=="ElectroBoom BCN"
  }
}

