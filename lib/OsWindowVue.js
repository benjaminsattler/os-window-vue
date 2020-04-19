export default {
  name: 'OsWindowVue',
  props: {
    windowTitle: {
      type: String,
      default: '',
    },
    hover: {
      type: Boolean,
      default: false,
    },
    interactive: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
      default: 'light',
    },
    osTheme: {
      type: String,
      default: 'mac',
    },
    windowState: {
      type: String,
      default: 'maximized',
    },
  },
  template: `<os-window
    :window-title="windowTitle"
    :window-state="windowState"
    :hover="hover ? 'hover' : false"
    :interactive="interactive ? 'interactive' : false"
    :theme="theme"
    :os-theme="osTheme"
    v-on:windowTitleChange="$emit('window-title-change', arguments[0].detail)"
    v-on:windowStateChange="$emit('window-state-change', arguments[0].detail)"
    v-on:hoverChange="$emit('hover-change', arguments[0].detail)"
    v-on:interactiveChange="$emit('interactive-change', arguments[0].detail)"
    v-on:themeChange="$emit('theme-change', arguments[0].detail)"
    v-on:osThemeChange="$emit('os-theme-change', arguments[0].detail)"
  >
    <slot></slot>
  </os-window>`,
};
