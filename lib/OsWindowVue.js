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
  template: '<span></span>',
  data() {
    const eventNewValueKeys = {
      hoverChange: 'newValue',
      interactiveChange: 'newValue',
      windowStateChange: 'newWindowState',
      themeChange: 'newTheme',
      osThemeChange: 'newOsTheme',
      windowTitleChange: 'newWindowTitle',
    };

    return {
      instance: document.createElement('os-window'),
      eventNewValueKeys,
      eventNames: Object.keys(eventNewValueKeys),
      watchProperties: [
        'windowTitle',
        'windowState',
        'osTheme',
        'theme',
        'hover',
        'interactive',
      ],
    };
  },
  created() {
    for (let i = 0; i < this.eventNames.length; i += 1) {
      const eventName = this.eventNames[i];
      this.instance.addEventListener(
        eventName,
        this.generateEventTrigger(eventName).bind(this),
      );
    }
    for (let i = 0; i < this.watchProperties.length; i += 1) {
      const propertyName = this.watchProperties[i];
      this.$watch(
        propertyName,
        this.generatePropertyWatcher(propertyName).bind(this),
        { immediate: true },
      );
    }
  },
  mounted() {
    this.$el.appendChild(this.instance);
  },
  methods: {
    generateEventTrigger(eventName) {
      return (e) => {
        this.$emit(this.toKebapCase(eventName), e.detail);
      };
    },
    generatePropertyWatcher(propertyName) {
      return (newPropertyValue) => { this.instance[propertyName] = newPropertyValue; };
    },
    toKebapCase(input) {
      return input.replace(
        /^[A-Z]/,
        (match) => match.toLowerCase(),
      ).replace(
        /[A-Z]/g,
        (match) => `-${match.toLowerCase()}`,
      );
    },
  },
};
