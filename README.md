# abersoftTest

## Application Result

![Image1](https://github.com/samuelzega/abersoftTest/blob/master/mobileClient/assets/image.png)

## Installation

This application made using
[react native](https://reactnative.dev/docs/getting-started) and
[expo](https://docs.expo.io/get-started/installation/) for the client
[expressJs](https://expressjs.com/en/starter/installing.html) and
[expo](https://sequelize.org/master/manual/getting-started.html) for the server

### Backend Configuration

-  go to server file -> config -> config.json, then change the username,
   password and databases name with your own
-  in server file change envTemplate file name become .env

```bash
cd server
npm i
npx sequelize db:create
npx sequelize db:migrate
npm run start
```

### Frontend Configuration

-  go to mobileClient file -> src -> constant -> baseUrl.js, change ipAddress
   with your own with your ipAddress

```bash
cd mobileClient
yarn install
yarn start
```
