import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditsService } from '../../app/services/reddits.services';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'reddits',
  templateUrl: 'reddits.html'
})
export class RedditsPage {
  items: any;
  category: any;
  limit: any;
  constructor(public navCtrl: NavController, private redditsService : RedditsService) {
  	this.getDefaults()
  }
  getDefaults(){
  	localStorage.getItem('category') ? this.category = localStorage.getItem('category') : this.category = 'sports';
  	localStorage.getItem('limit') ? this.limit = localStorage.getItem('limit') : this.limit = 10;
  }
  ngOnInit(){
  	this.getPosts(this.category, this.limit);
  }
  getPosts(category, limit){
  	this.redditsService.getPosts(category, limit).subscribe( response => {
  		this.items = response.data.children;
  	})
  }
  viewItem(item){
  	this.navCtrl.push(DetailsPage, {
  		item: item
  	});
  }
  changeCategory(){
  	this.getPosts(this.category, this.limit);
  }

}
