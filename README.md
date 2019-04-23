## react-redux-ssr-state-css

the app is a boilerplate for developing **react redux ssr** apps with **css** and **sass** modules.

it adds another feature. it keeps **state** on reloading and allows navigation through **state** history changes in the client side.

the app is bundled with **webpack**. there are three entry points: **client.js**, **ssr.js** and **server.js**.

**server.js** is the **express** app. it only gets bundled on production. when developing it uses **babel-node** to execute it and not uses the bundled version. the express app uses the bundled outputs from **webpack** of **client.js** and **ssr.js**. **ssr.js** it is used to make the **ssr** stuff (server side rendering of the **react** app). **client.js** (its bundled output) it is what is sent to the browser to execute the **react** app.

the scripts to run are **npm run dev** for developing. this allows you to open **chrome:inspect** for debugging purposes. also there are some console logs that will allow you to open the source code files on the **chrome debugger** in order to debug the server side part. this console logs don't get executed on the client side.

you run **npm run build** to bundle all the app, that is, **client.js**, **ssr.js** and **server.js**. then run **npm run start** to run the app in production mode. there will be not console logs in that mode.

you run **npm i** in the first place to install all the dependencies in order to start developing. in that sense the only dependencies which are **devDependencies** are **@babel/node** and **nodemon**. the rest are used for production so they are not **devDependencies**. so if you run **npm i --production** you will get all the necessary to get the app up and running, that is, to execute the scripts **npm run build** and **npm run start**. but because this is not the case i suppose you will run **npm i** instead (even **heroku** might run **npm i** instead of **npm i --production** but i am not sure. but if **heroku** where *pure* and run **npm i --production** there will be no problem, the app would not crash. i suppose this is a common mistake of people putting stuff as **--save-dev** when installing so that if we were strict and run **npm i --production** the app would not work because a lot of necessary stuff would be in **devDependencies**).

to publish/deploy on **heroku** you don't need to build. you just need to push the app changes as you do with **github** (that is you keep the same **.gitignore** file as it is). **heroku** will execute for you the scripts **npm i**, **npm run build** and **npm run start** to get the app up and running.
