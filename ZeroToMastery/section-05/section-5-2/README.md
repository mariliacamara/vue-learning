# Vue Developer Enviroment

Learns what is used to create the vue enviroment.

# Webpack

### Installing Webpack

```
npm install webpack webpack-cli --save-dev
```

#### Configuring Webpack

```
module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  }
}
```

Notes: 

- `entry: './index.js',` entry file is considered the main file for the application, its responsibility is to load other files we'll need for our application to function
- `filename: 'bundle.js'` creates a file that contains all the js code
- `path: __dirname + '/dist',` save the bundle.js into the respective directory


### General notes

- Loaders are a way to help webpack understand the various file types in our project.

- Extends the functionality of Webpack. Exempla: delete files, start a server, deploy your app, etc.


# Babel

### Instaling Babel
```
 npm install --save-dev @babel/core @babel/preset-env babel=loader
```
