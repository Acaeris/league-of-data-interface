import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'stripSpaces'})
export class StripSpacesPipe implements PipeTransform {
  transform(value: any) {
    if (value) {
      return value.replace(/ /g, '');
    }

    return value;
  }
}
