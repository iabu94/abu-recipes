import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideRouter } from '@angular/router';

import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';

const firebaseConfig = {
  apiKey: 'AIzaSyA6dNeq_fyotkXibKXDFYFNzEU76Osm3UI',
  authDomain: 'abu-recipes.firebaseapp.com',
  projectId: 'abu-recipes',
  storageBucket: 'abu-recipes.appspot.com',
  messagingSenderId: '1045310472841',
  appId: '1:1045310472841:web:102adb5e16ff1f913afc58',
  measurementId: 'G-G7PKTCP4JC',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideFirestore(() => getFirestore()),
    ]),
  ],
};
