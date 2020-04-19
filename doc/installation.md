## Installation

Choose any of the following methods to get started. You also need to install the actual [os-window][os-window] library.

### Install via node package manager

Run the following command in your command line to add both os-window and os-window-vue to your project
```shell
# for NPM
> npm install --save os-window os-window-vue

# for YARN
> yarn add os-window os-window-vue
```

#### Register the Vue component

When installing with a node package manager, then after you obtained os-window-vue, you need to register it with Vue like this:

```javascript
import 'os-window';
import { install } from 'os-window-vue';

Vue.use(install);
```

### Inclusion in the Browser

You can also directly include the JavaScript module in the browser. In that case you don't have to register it to Vue, as this will be done automatically when you include the browser entrypoint `browser.js`:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <script type="module" src="node_modules/vue/dist/vue.js"></script>
    <script type="module" src="node_modules/os-window/main.js"></script>
    <script type="module" src="node_modules/os-window-vue/browser.js"></script>
  </head>
  <body>
    <div id="app">
      <os-window-vue
        window-title="Random Cat Pic"
      >
        <img src="http://www.randomkittengenerator.com/cats/rotator.php">
      </os-window-vue>
    </div>
    <script type="module">
      new Vue({
        components: {
          osWindowVue: window.OsWindowVue,
        },
        el: '#app',
      });
    </script>
  </body>
</html>
```

## Basic Usage

This example creates a non-interactive window with light macos theme


```html
<template>
  <os-window-vue
    :window-title="'Random Cat Pic'"
  >
    <img src="http://www.randomkittengenerator.com/cats/rotator.php">
  </os-window-vue>
</template>

<script>
  import OsWindowVue from 'os-window-vue';

  export default {
    components: {
      OsWindowVue,
    },
  };
</script>
```

[os-window]:https://github.com/benjaminsattler/os-window
