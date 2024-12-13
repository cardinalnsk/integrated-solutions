import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'whatsapp',
  standalone: true
})
export class WhatsappPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }
    const phoneNumber = value.replace(/\D/g, '');
    return `https://wa.me/${phoneNumber}`;
  }

}
