import {Component, View} from 'angular2/angular2';
import {User} from '../../services/user';
import { FORM_DIRECTIVES} from 'angular2/angular2';
@Component({
	selector: 'login'
})

@View({
	templateUrl: './components/login/login.html',
    styleUrls: ['./components/login/login.css'],
    directives: [FORM_DIRECTIVES]
})
export class LogIn {
	constructor(public user: User) {}

	loginUser(data):void {
		this.user.getPerson(data.email, data.password);
	}
}
