# Installation

Choose any of the following methods to get started. You also need to install the actual [os-window][os-window] library.

```shell
# for NPM
> npm install --save os-window os-window-vue

# for YARN
> yarn add os-window os-window-vue
```

Then you need to register os-window-vue in your Vue application.

```javascript
import { install } from 'os-window-vue';

Vue.use(install);
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
