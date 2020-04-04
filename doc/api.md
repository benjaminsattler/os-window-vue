# API

This Vue component integrates the [os-window] web component. In this document you'll find how to talk to os-window through Vue.

## Properties of os-window-vue

All properties of os-window directly translate to a set of properties to pass to os-window-vue as well as an event that allows you to react to changes in the properties of the underlying os-window component.

### Mouse hover

You can enable mouse hover support by setting the `hover` property to `true`, as shown in the code example below:

```vue
<template>
  <vue-os-window
      :hover="true"
  ></vue-os-window>
</template>

<script>
import VueOsWindow from 'os-window-vue';

export default {
    name: 'App',
    components: {
        VueOsWindow,
    },
};
```

If you want to listen to changes to the `hover` property of the underlying `os-window` component, then you can listen to the `hover-change` event, as shown in the code example below. The event listener function will receive the `e.detail`-object like it is documented in the `os-window` documentation for the `hoverChange` event.

```vue
<template>
  <vue-os-window
      v-on:hover-change="onHoverChange"
  ></vue-os-window>
</template>

<script>
import VueOsWindow from 'os-window-vue';

export default {
    name: 'App',
    components: {
        VueOsWindow,
    },
    methods: {
        onHoverChange(e) {
            console.log(`old value was: ${e.oldValue} new theme is: ${e.newValue}`);
        }
    }
}
</script>
```

### Interactive

You can enable interaction support by setting the `interactive` property to `true`, as shown in the code example below:

```vue
<template>
  <vue-os-window
      :interactive="true"
  ></vue-os-window>
</template>

<script>
import VueOsWindow from 'os-window-vue';

export default {
    name: 'App',
    components: {
        VueOsWindow,
    },
};
```

If you want to listen to changes to the `interactive` property of the underlying `os-window` component, then you can listen to the `interactive-change` event, as shown in the code example below. The event listener function will receive the `e.detail`-object like it is documented in the `os-window` documentation for the `interactiveChange` event.

```vue
<template>
  <vue-os-window
      v-on:interactive-change="onInteractiveChange"
  ></vue-os-window>
</template>

<script>
import VueOsWindow from 'os-window-vue';

export default {
    name: 'App',
    components: {
        VueOsWindow,
    },
    methods: {
        onInteractiveChange(e) {
            console.log(`old value was: ${e.oldValue} new theme is: ${e.newValue}`);
        }
    }
}
</script>
```

### Window State

You can change the window state by setting the `window-state` property to all values supported by your version of `os-window`, as shown in the code example below:

```vue
<template>
  <vue-os-window
      :window-state="'maximized'"
  ></vue-os-window>
</template>

<script>
import VueOsWindow from 'os-window-vue';

export default {
    name: 'App',
    components: {
        VueOsWindow,
    },
};
```

If you want to listen to changes to the `window-state` property of the underlying `os-window` component, then you can listen to the `window-state-change` event, as shown in the code example below. The event listener function will receive the `e.detail`-object like it is documented in the `os-window` documentation for the `windowStateChange` event.

```vue
<template>
  <vue-os-window
      v-on:window-state-change="onWindowStateChange"
  ></vue-os-window>
</template>

<script>
import VueOsWindow from 'os-window-vue';

export default {
    name: 'App',
    components: {
        VueOsWindow,
    },
    methods: {
        onWindowStateChange(e) {
            console.log(`old window state was: ${e.oldWindowState} new theme is: ${e.newWindowState}`);
        }
    }
}
</script>
```

### Window Title

You can change the window title by setting the `window-title` property, as shown in the code example below:

```vue
<template>
  <vue-os-window
      :window-title="'My title title'"
  ></vue-os-window>
</template>

<script>
import VueOsWindow from 'os-window-vue';

export default {
    name: 'App',
    components: {
        VueOsWindow,
    },
};
```

If you want to listen to changes to the `window-title` property of the underlying `os-window` component, then you can listen to the `window-title-change` event, as shown in the code example below. The event listener function will receive the `e.detail`-object like it is documented in the `os-window` documentation for the `windowTitleChange` event.

```vue
<template>
  <vue-os-window
      v-on:window-title-change="onWindowTitleChange"
  ></vue-os-window>
</template>

<script>
import VueOsWindow from 'os-window-vue';

export default {
    name: 'App',
    components: {
        VueOsWindow,
    },
    methods: {
        onWindowTitleChange(e) {
            console.log(`old window title was: ${e.oldWindowTitle} new theme is: ${e.newWindowTitle}`);
        }
    }
}
</script>
```

### Operating System Theme

You can change the operating system theme of the window, as shown in the code example below:

```vue
<template>
  <vue-os-window
      :os-theme="'mac'"
  ></vue-os-window>
</template>

<script>
import VueOsWindow from 'os-window-vue';

export default {
    name: 'App',
    components: {
        VueOsWindow,
    },
};
```

If you want to listen to changes to the `os-theme` property of the underlying `os-window` component, then you can listen to the `os-theme-change` event, as shown in the code example below. The event listener function will receive the `e.detail`-object like it is documented in the `os-window` documentation for the `osThemeChange` event.

```vue
<template>
  <vue-os-window
      v-on:os-theme-change="onOsThemeChange"
  ></vue-os-window>
</template>

<script>
import VueOsWindow from 'os-window-vue';

export default {
    name: 'App',
    components: {
        VueOsWindow,
    },
    methods: {
        onOsThemeChange(e) {
            console.log(`old os theme was: ${e.oldOsTheme} new os theme is: ${e.newOsTheme}`);
        }
    }
}
</script>
```

### Theme

You can change the theme of the window, as shown in the code example below:

```vue
<template>
  <vue-os-window
      :theme="'dark'"
  ></vue-os-window>
</template>

<script>
import VueOsWindow from 'os-window-vue';

export default {
    name: 'App',
    components: {
        VueOsWindow,
    },
};
```

If you want to listen to changes to the `theme` property of the underlying `os-window` component, then you can listen to the `theme-change` event, as shown in the code example below. The event listener function will receive the `e.detail`-object like it is documented in the `os-window` documentation for the `themeChange` event.

```vue
<template>
  <vue-os-window
      v-on:theme-change="onThemeChange"
  ></vue-os-window>
</template>

<script>
import VueOsWindow from 'os-window-vue';

export default {
    name: 'App',
    components: {
        VueOsWindow,
    },
    methods: {
        onThemeChange(e) {
            console.log(`old theme was: ${e.oldTheme} new theme is: ${e.newTheme}`);
        }
    }
}
</script>
```

[os-window]:https://github.com/benjaminsattler/os-window
