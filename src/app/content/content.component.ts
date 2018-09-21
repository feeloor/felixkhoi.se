import { Component } from '@angular/core';

export class SocialChannel {
  icon: string;
  link: string;
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  public socialChannels: SocialChannel[];

  constructor() {
    this.socialChannels = [
      { icon: 'fab fa-github fa-3x', link: 'https://github.com/feeloor' },
      { icon: 'fab fa-linkedin fa-3x', link: 'https://www.linkedin.com/in/felix-mohammadi-kho-i-70383181/?ppe=1' },
      { icon: 'fab fa-blogger-b fa-3x', link: 'https://medium.com/@felix_20074' },
      { icon: 'fab fa-twitter fa-3x', link: 'https://twitter.com/FelixKhoi' },
      { icon: 'far fa-envelope fa-3x', link: 'mailto:felix@khoi.se' }
    ];
  }
}
