import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['']
})
export class AppComponent {
  constructor(meta: Meta, title: Title) {
    title.setTitle('FelixKhoi.se');
    meta.updateTag(
        { name: 'keywords', content: 'home, felix home, felix khoi home, felixkhoi.se' },
        'name=keywords'
    );
    meta.updateTag(
        { name: 'description', content: 'Felix Kho\'i home' },
        'name=description'
    );
  }
}
