import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { RedditsService } from '../../app/services/reddits.services';



@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {  

  public loading;  
  constructor(public navCtrl: NavController, private redditsService : RedditsService ) {}

  ionViewDidLoad() {
      this.redditsService.callGetRequest("https://api.github.com/").then((response)=>{
      this.loading = response;
    });
  }

}
