import {Component, View, NgIf} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Inject} from 'angular2/angular2';
import {User} from '../../services/user';
import {CurrentUser} from '../../services/current_user';
// import {SignValidators} from 'validators/signValidators';
// import {NgControl, NgForm, CORE_DIRECTIVES, FORM_DIRECTIVES, FORM_PROVIDERS, NG_VALIDATORS} from 'angular2/common';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators} from 'angular2/angular2';
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
