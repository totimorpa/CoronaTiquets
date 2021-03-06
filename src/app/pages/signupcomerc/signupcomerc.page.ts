import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import {HttpClient} from '@angular/common/http';
import { MenuController } from '@ionic/angular';



@Component({
  selector: 'app-signupcomerc',
  templateUrl: './signupcomerc.page.html',
  styleUrls: ['./signupcomerc.page.scss'],
})
export class SignupcomercPage implements OnInit {
  constructor(
    public router: Router,
    private http: HttpClient,
    private menu: MenuController
  ) {}

  submitForm(formData) : void{
    console.log(formData);
    this.http.post("",formData).subscribe(
      res=>{
        console.log(res);
      }
    )
  }
  onSignup() {
      this.router.navigateByUrl('/app/tabsbotiga/botiga');
      this.menu.enable(true)
  }
  ngOnInit() {
  }

}
