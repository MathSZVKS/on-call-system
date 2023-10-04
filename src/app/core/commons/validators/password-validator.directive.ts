import { Directive } from '@angular/core';
import {
  NG_VALIDATORS,
  AbstractControl,
  Validator,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const result = {
      hasUpperCase: /[A-Z]+/.test(value),
      hasLowerCase: /[a-z]+/.test(value),
      hasNumeric: /[0-9]+/.test(value),
    };

    return result.hasUpperCase && result.hasLowerCase && result.hasNumeric ? null : result;
  };
}

@Directive({
  selector: '[passwordValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordValidatorDirective,
      multi: true,
    },
  ],
})
export class PasswordValidatorDirective implements Validator {
  constructor() {}

  public validate(control: AbstractControl): ValidationErrors | null {
    return passwordValidator()(control);
  }
}
