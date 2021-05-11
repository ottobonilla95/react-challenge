# React challenge

## Development

### Stack 
React (Typescript).

### Libraries

- axios
- lodash
- moment
- redux
- saga
- webpack
- material ui
- jest
- react-tesring-library

## Run solution
First of all install all dependencies by running

```
npm i
```

then 

```
npm start
```

in order to see the app running you must add the subpath ***/reactchallenge***

***Example:*** 

```
http://localhost:3000/reactchallenge
```

test:

```
npm run test
```


### Live demo
You can see the live demo here:

http://128.199.43.48/reactchallenge/app/home


## Build your code for production

You can build the app for production by running

```
npm run build
```

This repo is linked with a jenkins server. If you want to see the changes in live, follow these steps:

- Make any changes (for e.g. change a title in the home view).
- In the Jenkins file, please provide the e-mail address where you wish to receive notifications by changing the value of ***emailToNotify***.
- Push the changes.
- Wait for the job to finish (you will receive an email to the account provided).
- Go to the url http://128.199.43.48/reactchallenge/app/home.
- Refresh your browser (Empty cache and hard reload if neccesary).

## Unit testing

I have provided an example of a test for the carItem Component.




