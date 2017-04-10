import { Component } from '@angular/core';

import { NavController, LoadingController } from 'ionic-angular';
import { RedditsService } from '../../app/services/reddits.services';



@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {  

  public loading;
  constructor(public navCtrl: NavController, private redditsService : RedditsService, private loadingCtrl: LoadingController ) {
    console.log("About"+redditsService);
    // Create the popup
    this.loading = this.loadingCtrl.create({
      content: 'Loading ...'
    });
  }
   ionViewDidLoad() {
    this.loading.present();
    this.redditsService.getTestUrl().subscribe( response => {
  		console.log(response);
		this.loading.dismiss();  		        
  	})
  }

}
