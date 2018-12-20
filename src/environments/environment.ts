// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyB0GYQtXs-573d8-Ssu655AICj3-uKpxXo',
    authDomain: 'gym-prog-pwa.firebaseapp.com',
    databaseURL: 'https://gym-prog-pwa.firebaseio.com',
    projectId: 'gym-prog-pwa',
    storageBucket: 'gym-prog-pwa.appspot.com',
    messagingSenderId: '492796096053'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
