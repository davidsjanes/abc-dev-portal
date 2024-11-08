import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-site-nav',
  templateUrl: './site-nav.component.html',
  styleUrls: ['./site-nav.component.scss']
})

export class SiteNavComponent {

  @Input() isCompact = false;

  constructor() {}


}