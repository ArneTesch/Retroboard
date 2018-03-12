import {Pipe, PipeTransform} from '@angular/core';
import {KeyValuePipeType} from '../types/key-value.type';

@Pipe({
  name: 'keyValue'
})
export class KeyValuePipe implements PipeTransform {
  transform(value): KeyValuePipeType<any, any> {
    if (!value) {
      return [];
    }
    const keyValuePair = [];
    Object.keys(value).forEach(
      (key) => keyValuePair.push({key: key, value: value[key]})
    );
    return keyValuePair;
  }
}
