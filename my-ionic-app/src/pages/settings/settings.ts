import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditsService } from '../../app/services/reddits.services';
import { RedditsPage } from '../reddits/reddits';

@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  category: any;
  limit: any;
  constructor(public navCtrl: NavController, private redditsService : RedditsService) {
  	this.getDefaults()
  }
  getDefaults(){
  	localStorage.getItem('category') ? this.category = localStorage.getItem('category') : this.category = 'sports';
  	localStorage.getItem('limit') ? this.limit = localStorage.getItem('limit') : this.limit = 10;	
  }
  setDefaults(){
  	localStorage.setItem('category', this.category);
  	localStorage.setItem('limit', this.limit);
  	this.navCtrl.push(RedditsPage);
  }
}
