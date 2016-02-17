import {Inject} from 'angular2/angular2';
import {Http, Headers} from 'angular2/http';

export class CarUpload {
    headers = new Headers();

    constructor(@Inject(Http) private http: Http) {
        this.headers.set('Content-Type', 'multipart/form-data');
    }

    uploadCar(data, file) {
        var formData : FormData = new FormData();
        formData.append('Car', file);
        formData.append('make', data.make);
        formData.append('model', data.model);
        formData.append('price', data.price);
        formData.append('yearOfCreation', data.year);


        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/uploadCar', true);
        xhr.withCredentials = true;
        xhr.send(formData);
    }

    getAllCars() {
        this.http.get('/getCars');
    }
}
