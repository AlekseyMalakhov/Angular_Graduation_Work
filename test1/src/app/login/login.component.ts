import { Component, OnInit } from '@angular/core';
import * as OktaSignIn from '@okta/okta-signin-widget';


var sampleConfig = {
  oidc: {
    clientId: "0oa48iu3oCyIWyO3I4x6",
    issuer: "https://dev-843586.okta.com/oauth2/default",
    redirectUri: 'http://localhost:4200/implicit/callback',
    scopes: ['openid', 'profile', 'email'],
  },
  resourceServer: {
    messagesUrl: 'http://localhost:8000/api/messages',
  },
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signIn: any;
  
  constructor() {
    this.signIn = new OktaSignIn({
      /**
       * Note: when using the Sign-In Widget for an ODIC flow, it still
       * needs to be configured with the base URL for your Okta Org. Here
       * we derive it from the given issuer for convenience.
       */
      baseUrl: sampleConfig.oidc.issuer.split('/oauth2')[0],
      clientId: sampleConfig.oidc.clientId,
      redirectUri: sampleConfig.oidc.redirectUri,
      logo: '/assets/angular.svg',
      i18n: {
        en: {
          'primaryauth.title': 'Log in to Your Favorite Places',
        },
        ru: {
          'primaryauth.title': 'Log in to Your Favorite Places',
        },
      },
      authParams: {
        pkce: true,
        responseMode: 'query',
        issuer: sampleConfig.oidc.issuer,
        display: 'page',
        scopes: sampleConfig.oidc.scopes,
      },
      customButtons: [{
        title: 'Close',
        className: 'btn-customAuth',
        click: function() {
          window.location.href = '';
        }
      }]
    });
  }

  ngOnInit() {
    this.signIn.renderEl(
      { el: '#sign-in-widget' },
      () => {
        /**
         * In this flow, the success handler will not be called because we redirect
         * to the Okta org for the authentication workflow.
         */
      },
      (err) => {
        throw err;
      },
    );
    this.signIn.show();
    console.log(this.signIn);
  }

}