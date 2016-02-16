import {Component, CORE_DIRECTIVES, NgFor, NgModel} from 'angular2/angular2';

import {NameList} from '../../services/name_list';
import {CarUpload} from '../../services/car_upload'
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators} from 'angular2/angular2';

@Component({
  selector: 'about',
  styles: [
    `
      ul li a {
        color:blue;
        cursor:pointer;
      }
    `
  ],
  templateUrl: './components/about/about.html',
  directives: [CORE_DIRECTIVES, NgFor, NgModel, FORM_DIRECTIVES]
})
export class About {
  cars = [];
  
  constructor(public list: NameList, private carUpload: CarUpload) {
    this.cars = list.get();
  }

  submit(data) {
    this.carUpload.uploadCar(data.data, data.file);
  }

  selectModels(value) {
    return this.list.getCarByMake(value)
  }
}
