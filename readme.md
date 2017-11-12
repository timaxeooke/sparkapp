# This is the main repository for the SPARK application

## Start up:
* Clone this entire repo
* Make sure that react-native is installed:
  - ```npm install -g create-react-native-app```
* Run ```npm-install```

## Running:
* Run ```react-native run-ios``` from inside the directory
* That should open up an ios-simulator (on a mac. I have no idea about android sims, or doing anything on windows)

## Editing:
* The main app is based in the file App.js in the main directory
  - This is where the main router will be placed (app.js will call the appropriate components for each page in the app)
* There is a directory called js that contints 3 subdirectories:
  1. components: the individual components will be placed here
  2. utils: for redux type stuff
  3. firebase: for the firebase config files
