/* eslint-env node */

module.exports = function (environment) {
  var ENV = {
    modulePrefix: 'dev-link',
    environment: environment,
    rootURL: '/',
    sassOptions: {
      includePaths: ['bower_components/materialize/sass']
    },
    locationType: 'auto',
    materializeDefaults: {
      // modalIsFooterFixed: false,
      buttonIconPosition: 'left',
      loaderSize: 'big',
      loaderMode: 'indeterminate',
      modalContainerId: 'materialize-modal-root-element',
      dropdownInDuration: 300,
      dropdownOutDuration: 300
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    firebase: {
      apiKey: "AIzaSyAI3whnyeMc3C4XHOdYuknBoqhcruMf-X4",
      authDomain: "dev-link.firebaseapp.com",
      databaseURL: "https://dev-link.firebaseio.com",
      projectId: "dev-link",
      storageBucket: "dev-link.appspot.com",
      messagingSenderId: "133273036314"
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.myApiKey = process.env.apiKey;

  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
