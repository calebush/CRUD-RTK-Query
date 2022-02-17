This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The main target of this app is to implement CRUD using the RTK-Query which is a powerful tool that enables: automatic refetch in case of any change of the data(update,delete and create), caching;RTK Query manages the automatic caching which has been motivated by other tools like Apolo client with GraphQL.


### server

This project uses the node express to implement the CRUD apis which is consumed by the RTK-Query (query and muttation).
To run the server, navigate to the node-server folder and `npm install` then start with `node index` comand or `nodemon index` if you have nodemon globally installed in your machine. 
It uses the mongodb to store the data, so you must have mongpdb installed.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

