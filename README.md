## Okta Multi Factor Authorization with React

First of all we need a Okta developer account to test MFA (multi-factor auth) in your device. I've created my own to
verify with `Okta verifty` app which is registed with my developer account.

### `Create Okta dev account`

Go to [https://developer.okta.com/](https://developer.okta.com/). Create a free account or sign up.

### `Register our React app with Okta`

After creating and login with Okta account it'll take you directly to Okta dashboard where you can find all settings
and options. In the top right corner you'll find `Org Url:` which we'll need in our application. Click on the `Application` tab. Then click on `Add application`. Then select `Single Page Application`.It'll take you to `Application Settings`. Type a meaningful application name. Change the `Base URI's` to [http://localhost:3000/](http://localhost:3000/) and also change the `Login Redirect URI's` to [http://localhost:3000/implicit/callback](http://localhost:3000/implicit/callback). Click `Done`. Now our application is registered. In the bottom you'll find a `Client Id`. Which we'll need in a moment. Save that `Client Id`.

### `Create our application`

Create your own application with `yarn create react-app` or clone this repo. First of all there are some packages that need to install with our application. I've already added those on `package.json` file. So no extra work there. I've also added material design with this project.<br>

**In the `App.js` change the `issuer` props under `Security` tag. Change it your `Org Url` like this "{Your Org Url}/oauth2/default" and also change the `client_id` props with your `Client_id`.**

### `Now start the application and test`

**Now start our application `npm start` or `yarn start`. You're good to go to test your Okta account with our application.**

### `For Multi Factor Authorization`

There is some extra work to do for MFA. Now that you have your Okta Developer account already set up and hooked into a React app, you don’t even need to change any of your code around. From this point on, it’s just a matter of changing some configuration settings inside Okta.

Go to this link and just follow the steps. [Add Multi-Factor Authentication](https://developer.okta.com/blog/2018/05/22/simple-multifactor-authentication-in-node#add-multi-factor-authentication-to-your-node-application).

Once you're done with the settings download `Okta verify` app from the App store. Install it on your device. Open App.
Add account. Verify your account with the given QR code. Now your `Okta app` is registered with your account.

In your `Okta Dashboard` under `User` tab you'll find `People`. Add as many person you want. You can also send the email notification. Once they try to login you'll get a notification that 'Someone is trying to access'. Once you approve the will bypass the authentication.

### Useful links

Most of my code are from here: https://developer.okta.com/code/react/okta_react/ <br>
For Multi-factor auth I follow this link: https://developer.okta.com/blog/2018/05/22/simple-multifactor-authentication-in-node#add-multi-factor-authentication-to-your-node-application
