# Scaffold React App

This project based bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Patterns

*Functional Programming*
- Immutability
    - no side-effects
    - Predictable data
- Functional methods
    - map/filter/reduce
- Higher Order Components/Functions
    - Reusability and Composition

**Domain Drive Desing**

**Atomic Design**
- Atoms
    - minimal unit component
- Molecule
    - composite from other atoms
- Organism
    - Join atoms and molecules
- Template
    - wireframe for views
- Pages
    - Final View
    
https://blog.ida.cl/desarrollo/que-es-el-atomic-design/

**Pure Component**
- fn(state, props) == UI
- Local state suggestions:
    - No local state other than:
        - Animation/triggering of CSS Classes
        - UI control that doesn't involve business logic or dependent on other components
        - Extremely trivial UI related variables that won't cause side effects
        - Standalone libraries


### State Management

**Redux**
https://redux.js.org/

**Redux DevTools**
[Chrome Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)

** DevTools guide**
https://codeburst.io/redux-devtools-for-dummies-74566c597d7

### Middlewares
**Redux-Sagas**  
https://github.com/redux-saga/redux-saga

control side-effects in a React-Redux application, but with the added bonus of using ES6 Generators to control async flow and increase readability.
[More on Generators](https://redux-saga.js.org/docs/ExternalResources.html)


### Redux "Ducks"

```
.
├── /ducks/
    ├── /MyDuck/
    |   ├── /__tests__/
    |   ├── actions.js
    |   ├── index.js
    |   ├── reducers.js
    |   ├── selectors.js
    |   ├── types.js
    |   ├── urls.js
    |   └── utils.js
    ├── /utils/ // Reducer specific utils
    ├── rootReducer.js
    └── types.js
```

## Coding Style

### Linter

This project use Airbnbguidestyle for react and trigger githook used husky setup.

https://githooks.com/

### Commitlint

This project use conventional commit rules and trigger commit-msg watcher for check the semantic's commit

https://www.conventionalcommits.org/en/v1.0.0/

#### Specifications
* **fix:** a commit of the type fix patches a bug in your codebase (this correlates with PATCH in Semantic Versioning).
* **feat:** a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in Semantic Versioning).
* **BREAKING CHANGE:** a commit that has a footer BREAKING CHANGE:, or appends a ! after the type/scope, introduces a breaking API change (correlating with MAJOR in Semantic Versioning). A BREAKING CHANGE can be part of commits of any type.
types other than fix: and feat: are allowed, for example @commitlint/config-conventional (based on the the Angular convention) recommends build:, chore:, ci:, docs:, style:, refactor:, perf:, test:, and others.

Ex:
```
feat: allow provided config object to extend other configs
BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```


### Component Creation

- Write a stateless functional component first
  - if (component requires state or life-cycle) Consider Hooks
  - if (component is comprised of multiple components or smaller pieces of functionality) Create container component
  - Move shared components out
    - if (app dependent) Keep in shared/MyComponent
    - if (!app dependent or primitive) Move to shared folder
- Avoid re-rendering component if possible

## Testing

### Libraries

**Jest**  
https://jestjs.io/

Most popular React testing library. Comes with snapshot comparisons which is very useful for testing pure components.

**Enzyme**  
https://airbnb.io/enzyme/

A popular addition to Jest that provides additional functionality to traversing through component trees,
as well as helper functions for testing, triggering user events being an example.

## VSCODE EXTENSIONS
-  code metrics
- dotenv
- error lens
-  es7 react/redux/graphql
- eslint
- npm intellisense
- Prettier
- sass
- sonarlint
- tabnine



## Running 
### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
