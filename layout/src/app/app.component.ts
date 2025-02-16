import { APP_BASE_HREF } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as singleSpa from 'single-spa';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'layout';

  public navigation(linkUrl: string) {
    singleSpa.navigateToUrl(linkUrl);
  }
}
