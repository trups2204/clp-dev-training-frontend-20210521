# flickr-images

This repo is a skeleton for developer training and testing.

## Getting started

In the project directory, install NPM packages using:

> yarn

Then run these in separate terminals alongside each other:

> yarn build

> yarn start:local

This will start the app in development mode. Open http://localhost:5000 to view it in the browser.

> yarn test
> yarn test-server

can be used to test the frontend and server code respectively. 
If you initialise this project as a Git repo these commands will run upon commit.

## Code structure overview

This repo roughly follows the code patterns that many IAG services do:

* A Node server acting as a Backend-for-Frontend (BFF) or Experience Layer
* React 16 being served from the Node server
* The initial HTML payload has variables injected into a script tag by the server, which allows us to
 provide values specific to a brand etc. For this challenge we've replaced our IAG-specific mechanism 
 for this with a simpler one called `express-interceptor`.
* Express, TypeScript, Webpack, Redux, Redux-Persist, DotEnv, Babel, Jest
* ESLint and Prettier.

## Tech challenge steps

1. Add a new frontend page at `/images`.
1. Add links to the homepage which goes to the images page, and vice-versa.
1. Add a button to the new page with the caption "Refresh images".
1. Add a new route to the Node server at `/api/images`.
1. Make the server route call the public Flickr API to fetch a list of images in json format (feel free to use which ever request library you're comfortable with).
1. Upon API call success, make the server route return only the title, author, and media link for each image.
1. Upon API call failure, make the server route return a generic error description and 500 status code (for this exercise you can treat all errors as 500s).
1. Make the "Refresh images" button call the new Node route (feel free to use which ever request library you're comfortable with).
1. Store the array of images in either Redux or another global statement management solution (your preference). If you go with Redux, we have `redux-persist` already set up so you can refresh the page without losing your Redux values.
1. Use a grid system to display the images on the page in a way that's responsive to different screen sizes.
1. Add the appropriate level of heading to the top of the page, along with a useful description of what the user is seeing below.
1. Add a little CSS to make the page look better (nothing complex, and in your own sense of style -- we're not looking for aesthetics, only some technicals!)
1. Last, a hypothetical question: you're given one week to perform any refactoring you want on this codebase. What would you do within that time, in order of priority, knowing that you're working within a team?

## Hints and tips

* We tend to use VS Code with the eslint, tslint, and prettier extensions installed to make it easy to catch and fix JS and formatting issues.

## Tech note: Including code from `src` inside `server` code (and vice-versa)

Don't include anything from the `src` folder in `server` code. This will cause `tsc` (used during the build process) to build a totally different structure inside `dist`, breaking server startup at deployment.

Details: Instead of outputting `dist/server.js` and other other server-related files and directories at the same level, you'll get `dist/src` and `dist/server` directories. Note that the local development setup will still work fine and you'll only discover at deployment when Bamboo says the deployment is successful but Rancher gives you `Error: Cannot find module '/usr/src/app/server.js'` in the service log.
