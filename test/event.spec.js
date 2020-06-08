const { OsWindowVue } = window;
const { mount } = VueTestUtils;

describe('events', () => {
  let sut;
  afterEach(() => {
    sut.destroy();
  });

  describe('hover-change', () => {
    it('fires when os-window hover changes', () => {
      sut = mount(OsWindowVue, {});

      const osWindowInstance = sut.get('os-window').element;

      osWindowInstance.hover = true;
      chai.expect(sut.emitted()).to.have.property('hover-change');
    });

    it('fires when hover data changes', async () => {
      sut = mount(OsWindowVue, {});

      sut.setProps({ hover: true });
      await Vue.nextTick();
      chai.expect(sut.emitted()).to.have.property('hover-change');
    });

    it('has correct event details', async () => {
      sut = mount(OsWindowVue, {});

      sut.setProps({ hover: true });
      await Vue.nextTick();
      sut.setProps({ hover: false });
      await Vue.nextTick();
      const actualEvent = sut.emitted('hover-change').pop().pop();
      chai.expect(actualEvent).to.have.property('oldValue');
      chai.expect(actualEvent).to.have.property('newValue');
      chai.expect(actualEvent.oldValue).to.equal(true);
      chai.expect(actualEvent.newValue).to.equal(false);
    });
  });

  describe('interactive-change', () => {
    it('fires when os-window interactive changes', () => {
      sut = mount(OsWindowVue, {});

      const osWindowInstance = sut.get('os-window').element;

      osWindowInstance.interactive = true;
      chai.expect(sut.emitted()).to.have.property('interactive-change');
    });

    it('fires when interactive data changes', async () => {
      sut = mount(OsWindowVue, {});

      sut.setProps({ interactive: true });
      await Vue.nextTick();
      chai.expect(sut.emitted()).to.have.property('interactive-change');
    });

    it('has correct event details', async () => {
      sut = mount(OsWindowVue, {});

      sut.setProps({ interactive: true });
      await Vue.nextTick();
      sut.setProps({ interactive: false });
      await Vue.nextTick();
      const actualEvent = sut.emitted('interactive-change').pop().pop();
      chai.expect(actualEvent).to.have.property('oldValue');
      chai.expect(actualEvent).to.have.property('newValue');
      chai.expect(actualEvent.oldValue).to.equal(true);
      chai.expect(actualEvent.newValue).to.equal(false);
    });
  });

  describe('theme-change', () => {
    it('fires when os-window theme changes', () => {
      sut = mount(OsWindowVue, {});

      const osWindowInstance = sut.get('os-window').element;

      osWindowInstance.theme = 'dark';
      chai.expect(sut.emitted()).to.have.property('theme-change');
    });

    it('fires when theme data changes', async () => {
      sut = mount(OsWindowVue, {});

      sut.setProps({ theme: 'dark' });
      await Vue.nextTick();
      chai.expect(sut.emitted()).to.have.property('theme-change');
    });

    it('has correct event details', async () => {
      sut = mount(OsWindowVue, {});

      sut.setProps({ theme: 'dark' });
      await Vue.nextTick();
      sut.setProps({ theme: 'light' });
      await Vue.nextTick();
      const actualEvent = sut.emitted('theme-change').pop().pop();
      chai.expect(actualEvent).to.have.property('oldTheme');
      chai.expect(actualEvent).to.have.property('newTheme');
      chai.expect(actualEvent.oldTheme).to.equal('dark');
      chai.expect(actualEvent.newTheme).to.equal('light');
    });
  });

  describe('os-theme-change', () => {
    it('fires when os-window osTheme changes', async () => {
      sut = mount(OsWindowVue, {});

      const osWindowInstance = sut.get('os-window').element;
      const supported = customElements.get('os-window').supportedOsThemes;
      supported.forEach(async (osTheme, index) => {
        osWindowInstance.osTheme = osTheme;
        await Vue.nextTick();
        chai.expect(sut.emitted()['os-theme-change'].length).to.equal(index + 1);
      });
    });

    it('fires when osTheme data changes', async () => {
      sut = mount(OsWindowVue, {});

      const supported = customElements.get('os-window').supportedOsThemes;
      supported.forEach(async (osTheme, index) => {
        sut.setProps({ osTheme });
        await Vue.nextTick();
        chai.expect(sut.emitted()['os-theme-change'].length).to.equal(index + 1);
      });
    });

    it('has correct event details', async () => {
      sut = mount(OsWindowVue, {});

      sut.setProps({ osTheme: 'win-xp' });
      await Vue.nextTick();
      const actualEvent = sut.emitted('os-theme-change').pop().pop();
      chai.expect(actualEvent).to.have.property('oldOsTheme');
      chai.expect(actualEvent).to.have.property('newOsTheme');
      chai.expect(actualEvent.oldOsTheme).to.equal('mac');
      chai.expect(actualEvent.newOsTheme).to.equal('win-xp');
    });
  });

  describe('window-state', () => {
    it('fires when os-window windowState changes', () => {
      sut = mount(OsWindowVue, {});

      const osWindowInstance = sut.get('os-window').element;

      osWindowInstance.windowState = 'minimized';
      chai.expect(sut.emitted()).to.have.property('window-state-change');
    });

    it('fires when os-window windowState data changes', async () => {
      sut = mount(OsWindowVue, {});

      sut.setProps({ windowState: 'minimized' });
      await Vue.nextTick();
      chai.expect(sut.emitted()).to.have.property('window-state-change');
    });

    it('has correct event details', async () => {
      sut = mount(OsWindowVue, {});

      sut.setProps({ windowState: 'maximized' });
      await Vue.nextTick();
      sut.setProps({ windowState: 'minimized' });
      await Vue.nextTick();
      const actualEvent = sut.emitted('window-state-change').pop().pop();
      chai.expect(actualEvent).to.have.property('oldWindowState');
      chai.expect(actualEvent).to.have.property('newWindowState');
      chai.expect(actualEvent.oldWindowState).to.equal('maximized');
      chai.expect(actualEvent.newWindowState).to.equal('minimized');
    });
  });

  describe('window-title', () => {
    it('fires when os-window windowTitle changes', () => {
      sut = mount(OsWindowVue, {});

      const osWindowInstance = sut.get('os-window').element;

      osWindowInstance.windowTitle = 'new window title';
      chai.expect(sut.emitted()).to.have.property('window-title-change');
    });

    it('fires when os-window windowTitle data changes', async () => {
      sut = mount(OsWindowVue, {});

      sut.setProps({ windowTitle: 'new window title' });
      await Vue.nextTick();
      chai.expect(sut.emitted()).to.have.property('window-title-change');
    });

    it('has correct event details', async () => {
      sut = mount(OsWindowVue, {});

      const oldWindowTitle = 'old window title';
      const newWindowTitle = 'new window title';

      sut.setProps({ windowTitle: oldWindowTitle });
      await Vue.nextTick();
      sut.setProps({ windowTitle: newWindowTitle });
      await Vue.nextTick();
      const actualEvent = sut.emitted('window-title-change').pop().pop();
      chai.expect(actualEvent).to.have.property('oldWindowTitle');
      chai.expect(actualEvent).to.have.property('newWindowTitle');
      chai.expect(actualEvent.oldWindowTitle).to.equal(oldWindowTitle);
      chai.expect(actualEvent.newWindowTitle).to.equal(newWindowTitle);
    });
  });
});
