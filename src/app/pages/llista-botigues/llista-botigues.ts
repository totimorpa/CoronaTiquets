import { Component } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'page-llista-botigues',
  templateUrl: 'llista-botigues.html',
  styleUrls: ['./llista-botigues.scss'],
})
export class LlistaBotiguesPage {
  speakers: any[] = [];

  constructor(public confData: ConferenceData) {}

  ionViewDidEnter() {
    this.confData.getSpeakers().subscribe((speakers: any[]) => {
      this.speakers = speakers;
    });
  }
}
