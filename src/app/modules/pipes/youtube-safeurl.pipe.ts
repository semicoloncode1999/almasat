import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'youtubeSafeurl'
})
export class YoutubeSafeurlPipe implements PipeTransform {

  constructor(private DomSanitizer: DomSanitizer) {}

  transform(url: string): SafeResourceUrl {
    return this.DomSanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
