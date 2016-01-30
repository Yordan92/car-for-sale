import {Component, View, NgIf} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {User} from 'services/User';
import {SignValidators} from 'validators/signValidators';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators} from 'angular2/angular2';
@Component({
	selector: 'sign'
})

@View({
		directives: [FORM_DIRECTIVES, NgIf],
		templateUrl: './components/sign/sign.html',
		viewBindings: [FormBuilder],
	    styleUrls: ['./components/sign/sign.css']
})
// @CanActivate((next, prev) => { console.log(next, prev);return false;})
export class Sign {
	myForm: ControlGroup;

	constructor(fb: FormBuilder, public user: User) {  
		let self = this;
    	this.myForm = fb.group({  
			'firstName': ['', Validators.required],
			'lastName': [''],
			'pass': ['', Validators.required],
			're-pass': ['', Validators.required]
		});
		// this.myForm.validator = this.myForm.validator
		console.log(this.myForm);
	}

	submitUser(arg): void {
		if (arg.valid && arg.value.pass === arg.value['re-pass']) {
			this.user.getInstance().registrate(arg.value);
		}
	}
}