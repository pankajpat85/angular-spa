import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { NgZone } from '@angular/core';
import { Router } from '@angular/router';
import {
  singleSpaAngular,
  getSingleSpaExtraProviders,
} from 'single-spa-angular';

const lifecycles = singleSpaAngular({
  bootstrapFunction: (singleSpaProps) => {
    return bootstrapApplication(AppComponent, {
      providers: [...getSingleSpaExtraProviders(), ...appConfig.providers],
    });
  },
  template: '<app-root />',
  Router,
  NgZone,
});

export const { bootstrap, mount, unmount } = lifecycles;
