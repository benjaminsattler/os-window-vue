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

#### Including the base library

In your application entrypoint you need to include the library `os-window`. Afterwards you can use the vue component in your application.

```javascript
import 'os-window';
```

### Inclusion in the Browser

You can also directly include the JavaScript module in the browser with the `browser.js` entrypoint:

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
### Use the CDN
This project is also published to the CDN unpkg, which enables you to skip any local module installation when including this module in your webpage. Don't forget to also include `os-window`, which is also provided by unpkg:

```html
<!-- Include specific version (recommended) -->
<script type="module" src="https://unpkg.com/os-window@0.3.0"></script>
<script type="module" src="https://unpkg.com/os-window-vue@0.1.3/browser.js"></script>

<!-- Include latest version (not recommended) -->
<script type="module" src="https://unpkg.com/os-window"></script>
<script type="module" src="https://unpkg.com/os-window-vue/browser.js"></script>
```

[os-window]:https://github.com/benjaminsattler/os-window
