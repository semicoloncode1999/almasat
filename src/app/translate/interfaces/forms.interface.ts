export interface formControl {
  key: string;
  inputType:
    | 'text'
    | 'number'
    | 'email'
    | 'password'
    | 'tel'
    | 'url'
    | 'search'
    | 'date'
    | 'datetime-local'
    | 'month'
    | 'week'
    | 'time'
    | 'color'
    | 'file'
    | 'checkbox'
    | 'radio'
    | 'range'
    | 'hidden'
    | 'button'
    | 'submit'
    | 'reset'
    | 'select'
    | 'textarea';
}
