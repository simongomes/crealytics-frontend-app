# Crealytics Frontend App

## About App

- A eCommerce product listing app created with react, showcases a list of product from product database.
- Contains search functionality. You can search through products using the search bar at the top.
- Contains filter functionality. You can filter through gender and can see which product on sale.

## Installation

```
git clone https://github.com/simongomes/crealytics-frontend-app.git
cd crealytics-frontend-app
npm install
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Libraries and Packages

- React
- Redux Toolkit
- Jest
- @testing-library/user-event
- react-async-image

## Important Folders

- `src/component` - Contains the UI components.
- `src/store` - Contains the redux store and app state configurations.
- `src/tests` - Contains the necessery test cases for the app to validate component renders and functionality.
- `src/utils` - Contains the products data for the app.
