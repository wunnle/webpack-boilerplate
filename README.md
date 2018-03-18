# Webpack Boilerplate
Webpack 4 boilerplate uses webpack-dev-server, babel and sass loaders.

## Getting started

Clone the repo and to install dependencies, run:

#### `npm install` or `yarn`

## Development

To run project on local with livereload:

#### `npm start` or `yarn start`

Dev server will watch all your imported modules for changes and auto compile them. To also watch HTML files, I used raw-loader. Since it does not make sense to import HTML files on production build, I defined a global enviroment variable using DefinePlugin to exclude them from prod build like this: 

```
if(!PRODUCTION) {
  require('../index.html')
}
```

Dev server will run on [http://localhost:8181](http://localhost:8181) by default.


## Building

To create a minified production build, simply run:

#### `npm run build` or `yarn build`

The build will in /build folder.




