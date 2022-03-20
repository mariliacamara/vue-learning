module.exports = {
  // entry file is considered the main file for the application
  // the entry files responsibility is to load other files we'll need for our application to function
  entry: './index.js',
  output: {
    filename: 'bundle.js', // creates a file that contains all the js code
    path: __dirname + '/dist', // save the bundle.js into the respective directory
  }
}