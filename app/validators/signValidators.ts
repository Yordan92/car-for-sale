export class SignValidators {
    static rePassValidator(form, control): any {  
        console.log(form);
        let value = '';
        if (form) {
            value = form.controls[control];
        }
        return function (control) {
            if(value && value !='') {
                if (value !== control.value) {
                    return {noMatch: true};
                }
            }
            return null;
        }
    }
};