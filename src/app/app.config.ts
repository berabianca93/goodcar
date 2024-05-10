import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"goodcar-bibi","appId":"1:331411578064:web:fefafcd7ecb78c2b81d2d5","storageBucket":"goodcar-bibi.appspot.com","apiKey":"AIzaSyD88657pjQwWboEwAPbbXnsB82ii1dY6wY","authDomain":"goodcar-bibi.firebaseapp.com","messagingSenderId":"331411578064"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
