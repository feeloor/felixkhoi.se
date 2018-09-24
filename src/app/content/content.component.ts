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
      { icon: 'fab fa-github fa-3x', link: 'http://bit.ly/github-felixkhoise' },
      { icon: 'fab fa-linkedin fa-3x', link: 'http://bit.ly/linkedin-felixkhoise' },
      { icon: 'fab fa-blogger-b fa-3x', link: 'http://bit.ly/medium-felixkhoise' },
      { icon: 'fab fa-twitter fa-3x', link: 'http://bit.ly/twitter-felixkhoise' },
      { icon: 'far fa-envelope fa-3x', link: 'mailto:felix@khoi.se' }
    ];
  }
}
