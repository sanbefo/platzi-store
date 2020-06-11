import { AbstractControl } from '@angular/forms';

export class MyValidators {
    static isPriceValid(control: AbstractControl) {
        const value = control.value;
        console.log(value);
        return value > 10000 ? { price_invalid: true } : null;
    }
}
