## react-redux-ssr-state-css

the app is a boilerplate for developing **react redux ssr** apps with **css** and **sass** modules.

it adds another feature. it keeps **state** on reloading and allows navigation through **state** history changes in the client side.

the app is bundled with **webpack**. there are three entry points: **client.js**, **ssr.js** and **server.js**.

**server.js** is the **express** app. it only gets bundled on production. when developing it uses **babel-node** to execute it and not uses the bundled version. the **express** app uses the bundled outputs from **webpack** of **client.js** and **ssr.js**. **ssr.js** it is used to make the **ssr** stuff (server side rendering of the **react** app). **client.js** (its bundled output) it is what is sent to the browser to execute the **react** app.

you run are **npm run dev** for developing. then open **chrome:inspect** for debugging purposes. there are console logs to allow you open the source code files on **chrome debugger**. there are no console logs on the client side.

you run **npm run build** to bundle all the app, that is, all three entry points **client.js**, **ssr.js** and **server.js**. then run **npm run start** to start the app. no console logs will appear.

you run **npm i** to install all the dependencies. if you run **npm i --production** you will be ready to get the app up and running but not developing.

to publish/deploy on **heroku** you just push the app changes. **heroku** will execute for you the scripts **npm i** (or **npm i --production** maybe but i doubt it), **npm run build** and **npm run start** to get the app up and running.
