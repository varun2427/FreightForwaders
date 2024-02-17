import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';


@NgModule({
    imports: [AuthModule.forRoot({
        config: {
            authority: 'https://dev-21o3sh6vqrpv2oan.us.auth0.com',
            redirectUrl: 'http://localhost:4200',
            postLogoutRedirectUri: window.location.origin,
            postLoginRoute:'/login',
            clientId: 'V0GyM5nCaU1Uva8IFuFbZjtqiAsBj7ey',
            scope: 'openid profile offline_access',
            responseType: 'code',
            silentRenew: true,
            useRefreshToken: true,
        }
      })],
    exports: [AuthModule],
})
export class AuthConfigModule {}
