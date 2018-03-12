// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'URL_TO_FIREBASE_APP.firebaseapp.com',
    databaseURL: 'DATABASE_URL',
    projectId: 'PROJECT_ID',
    storageBucket: 'STORAGE_BUCKET.appspot.com',
    messagingSenderId: 'SENDER_ID'
  }
};
