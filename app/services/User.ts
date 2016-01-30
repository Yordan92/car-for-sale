import {Inject} from 'angular2/angular2';
import {Http, Headers} from 'angular2/http';
import {localStorageHeader} from 'services/token';

export class User {
    static instance:User;
    static isCreating:Boolean = false;

    constructor(@Inject(Http) private http: Http) {
        this.http.get('http://localhost:3000/user', 
        {
            headers: localStorageHeader
        })
        .map(res => res.json())
        .subscribe(function (data) {
            this.currUser = data;
        });

    }
    static getInstance(@Inject(Http) private http: Http) {
        if (User.instance == null) {
            User.isCreating = true;
            User.instance = new User(http);
            User.isCreating = false;
        }
 
        return User.instance;
    }
    getPerson(name, pass) {
        this.http.post('http://localhost:3000/signUp', JSON.stringify(
            {
                name,
                pass
            }), {
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).map(res => res.json())
        .subscribe(function (data) {
            this.currUser = data;
            localStorage.setItem('token', this.currUser.token);
        });
    }
    registrate(obj) {
        this.http.post('http://localhost:3000/registrate', JSON.stringify(obj), {
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .map(res => res.json())
        .subscribe(function (data) {
            getPerson(data.firstName, data.pass);
        });
    }

    get(): any {
        return this.currUser;
    }
}