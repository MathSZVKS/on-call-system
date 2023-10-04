import { Directive } from '@angular/core';
import {
  NG_VALIDATORS,
  AbstractControl,
  Validator,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export function cpfValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let cpf = control.value;

    if (!cpf) {
      return null;
    }

    cpf = typeof cpf == 'number' ? cpf.toString() : cpf.replace(/\D/g, '');

    if (cpf.length != 11 || /^(\d)\1{10}$/.test(cpf)) {
      return { invalid: true };
    }

    let result = { valid: true };

    [9, 10].forEach((j) => {
      let sum = 0,
        r;

      cpf
        .split(/(?=)/)
        .splice(0, j)
        .forEach((e: string, i: number) => {
          sum += parseInt(e) * (j + 2 - (i + 1));
        });

      r = sum % 11;
      r = r < 2 ? 0 : 11 - r;

      if (r != cpf.substring(j, j + 1)) {
        result.valid = false;
      }
    });

    return result.valid ? null : result;
  };
}

@Directive({
  selector: '[cpfValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: cpfValidatorDirective,
      multi: true,
    },
  ],
})
export class cpfValidatorDirective implements Validator {
  constructor() {}

  public validate(control: AbstractControl): ValidationErrors | null {
    return cpfValidator()(control);
  }
}
