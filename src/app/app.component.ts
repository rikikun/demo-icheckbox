import { Component, ViewChildren } from '@angular/core';
import { IcheckDirective } from './icheck.directive';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChildren(IcheckDirective) dirs;

  title = 'app works!';
  test = 'test';

  data = 'empty';

  checkAllValue = false;



  changeja(data) {
    this.test = data;
    console.log('change');
  }

  onClick(data) {
    let test = this.dirs.first.getData();
    this.data = '';
    this.dirs.map(r => {
      if (r.getCheck()) {
        this.data += r.getData();
        console.log(r.getData());
      }
    });
  }

  checkAll() {
    this.dirs.map(r => {
      r.setData(this.checkAllValue);
    });
  }
}
