import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx'

@Injectable()
export class RedditsService{
	http: any;
	baseUrl: string;
	testUrl: string;
	public loading;

	constructor(http: Http){
		
		this.http = http;
		this.baseUrl = "https://www.reddit.com/r";
		this.testUrl = "http://studentsofstrength.com/api/user/find/?emailid=rahul.kumar@above-inc.com"

	}

	getPosts(category, limit){
		return this.http.get(this.baseUrl+'/'+category+'/top.json?limit='+limit).map(res => res.json());
	}

	getTestUrl(){
		return this.http.get(this.testUrl).map(res => res.json());
	}
}


