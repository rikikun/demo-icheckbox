import { Directive, ElementRef } from '@angular/core';
declare var $: any;

@Directive({
  selector: '[appIcheck]'
})
export class IcheckDirective {

  el: ElementRef;

  constructor(el: ElementRef) {
    this.el = el;
    // el.nativeElement.style.backgroundColor = 'yellow';
    $(el.nativeElement).iCheck({
      checkboxClass: 'icheckbox_square-aero',
      radioClass: 'iradio_square-aero'
    })
  }

  getData() {
    let data = $(this.el.nativeElement).val();
    return data;
  }

  getCheck() {
    let chk = $(this.el.nativeElement).is(":checked");
    return chk;
  }

  setData(data) {
    data ? $(this.el.nativeElement).iCheck('check'):$(this.el.nativeElement).iCheck('uncheck')
  }

}
