import {Component, View} from 'angular2/angular2';
// import {CanActivate} from 'angular2/router';
// import {User} from 'services/user';
@Component({
	selector: 'home',
	// viewBindings: [User]	
})

@View({
	templateUrl: './components/home/home.html',
    styleUrls: ['./components/home/home.css']
})
// @CanActivate((next, prev) => { console.log(next, prev);return false;})
export class Home {}
