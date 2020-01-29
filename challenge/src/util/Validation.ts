export default class Validation {
  validateEmail = (value: string): any => {
    let result: any = null;

    const regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (value == null || value.trim().length == 0) result = 'Email required';
    else if (!regexp.test(String(value).toLocaleLowerCase()))
      result = 'Format error';
    return result;
  };

  validatePassword = (value: string): any => {
    let result: any = null;

    if (value && value.length < 6) result = true;

    if (value == null || value.trim().length == 0) result = true;

    return result;
  };
}
