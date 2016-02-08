import {Inject} from 'angular2/angular2';
import {Http, Headers} from 'angular2/http';
import {CurrentUser} from './current_user'
// import {localStorageHeader} from 'services/token';

export class User {
    currentUser: CurrentUser;
    currUser;

    constructor(@Inject(Http) private http: Http) {
        // this.currentUser = new CurrentUser();
        this.get();

    }

    getPerson(email, password) {
        this.http.post('http://localhost:3000/signUp', JSON.stringify(
            {
                email,
                password
            }), {
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).map(res => res.json())
        .subscribe(function (data) {
          this.currUser = data;
            // localStorage.setItem('token', this.currUser.token);
        });
    }
    registrate(obj) {
        this.http.post('http://localhost:3000/registrate', JSON.stringify(obj), {
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .map(res => res.json())
        .subscribe( (data) => this.getPerson(data.firstName, data.pass));
    }
    
    get() {
        this.http.get('http://localhost:3000/user')
            .map(res => res.json())
            .subscribe(function (data) {
              this.currUser = data;
              console.log(this.currUser);
            });
    }

    getUser() {
        return this.currUser;
    }
  
}
