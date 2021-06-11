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
  render(h) {
    return h(
      'os-window',
      {
        attrs: {
          'window-title': this.$props.windowTitle,
          'window-state': this.$props.windowState,
          hover: this.$props.hover ? 'hover' : false,
          interactive: this.$props.interactive ? 'interactive' : false,
          theme: this.$props.theme,
          'os-theme': this.$props.osTheme,
        },
        on: {
          windowTitleChange: ($event) => this.$emit('window-title-change', $event.detail),
          windowStateChange: ($event) => this.$emit('window-state-change', $event.detail),
          hoverChange: ($event) => this.$emit('hover-change', $event.detail),
          interactiveChange: ($event) => this.$emit('interactive-change', $event.detail),
          themeChange: ($event) => this.$emit('theme-change', $event.detail),
          osThemeChange: ($event) => this.$emit('os-theme-change', $event.detail),
        },
      },
      this.$slots.default,
    );
  },
};
