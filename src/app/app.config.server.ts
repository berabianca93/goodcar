import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyD88657pjQwWboEwAPbbXnsB82ii1dY6wY",
  authDomain: "goodcar-bibi.firebaseapp.com",
  projectId: "goodcar-bibi",
  storageBucket: "goodcar-bibi.appspot.com",
  messagingSenderId: "331411578064",
  appId: "1:331411578064:web:fefafcd7ecb78c2b81d2d5"
};

initializeApp(firebaseConfig);

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
