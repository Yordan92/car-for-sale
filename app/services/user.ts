import {Inject} from 'angular2/angular2';
import {Http, Headers} from 'angular2/http';

export class User {
    currUser;

    constructor( @Inject(Http) private http: Http) {
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
        .subscribe( (data) => {
            this.setUser(data);
            window.location.href='/';
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
            .subscribe( (data) => {
                this.setUser(data);

            });
    }

    setUser(user) {
        this.currUser = user;
    }

    getUser() {
        return this.currUser;
    }
}
