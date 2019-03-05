import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Homepage';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'instagram',
      sanitizer.bypassSecurityTrustResourceUrl('assets/instagram_logo.svg'));
    iconRegistry.addSvgIcon(
      'youtube',
      sanitizer.bypassSecurityTrustResourceUrl('assets/youtube_logo.svg'));
    iconRegistry.addSvgIcon(
      'logo_ne',
      sanitizer.bypassSecurityTrustResourceUrl('assets/logo_ne.svg'));
    iconRegistry.addSvgIcon(
      'playbotton',
      sanitizer.bypassSecurityTrustResourceUrl('assets/playbotton.svg'));
  }

  ngOnInit() {
  }
}
