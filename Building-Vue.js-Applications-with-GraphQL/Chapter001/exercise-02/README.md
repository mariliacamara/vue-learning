# Current Time

Creating the hello world components.

## What it does?

Learning how to create components and import it to App.vue

## Notes

- To use a component, you need to import it and declare it inside the components property on the component you want to use it. 

*App.vue*
```
import CurrentTime from './components/CurrentTime.vue'
```
- Intl.DateTimeFormat function was used to format and parse dates to declared locations. To get the local format, the navigator global variable was used.

# Setup
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
