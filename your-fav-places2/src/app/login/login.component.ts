import { Component, OnInit } from '@angular/core';
import * as OktaSignIn from '@okta/okta-signin-widget';
import { OktaAuthService } from '@okta/okta-angular';
import sampleConfig from '../app.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signIn: any;
  
  constructor(public oktaAuth: OktaAuthService) {
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
        issuer: sampleConfig.oidc.issuer,
        scopes: sampleConfig.oidc.scopes,
      },
      customButtons: [{
        title: 'Close',
        className: 'btn-customAuth',
        click: function() {
          window.location.href = '';
        }
      }],
      helpLinks: {
        help: 'https://fav-places-server.herokuapp.com/okta.txt',
        custom: [
          {
            text: 'Test accounts',
            href: 'https://fav-places-server.herokuapp.com/okta.txt',
            target: "_blank",
          },
        ]
      },
    });
  }

  ngOnInit() {
    this.signIn.showSignInToGetTokens({
      el: '#sign-in-widget',
      scopes: sampleConfig.oidc.scopes
    }).then(tokens => {
      this.oktaAuth.setOriginalUri('/');

      // Remove the widget
      this.signIn.remove();

      // In this flow the redirect to Okta occurs in a hidden iframe
      this.oktaAuth.handleLoginRedirect(tokens);
    }).catch(err => {
      // Typically due to misconfiguration
      throw err;
    });
  }

}
