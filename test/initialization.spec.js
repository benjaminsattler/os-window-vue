const VueOsWindow = VueOsWindowPlugin.default;
const { mount } = VueTestUtils;

describe('initialization', () => {
  let sut;
  afterEach(() => {
    sut.destroy();
  });
  describe('windowTitle', () => {
    describe('when set', () => {
      it('initialises correctly', () => {
        const expectedPropValue = 'expected prop value';
        sut = mount(VueOsWindow, {
          propsData: {
            windowTitle: expectedPropValue,
          },
        });

        const osWindowInstance = sut.get('os-window').element;

        chai.expect(sut.vm.windowTitle).to.equal(expectedPropValue);
        chai.expect(sut.vm.windowTitle).to.equal(osWindowInstance.windowTitle);
      });
    });

    describe('when unset', () => {
      it('initialises correctly', () => {
        sut = mount(VueOsWindow);

        const osWindow = customElements.get('os-window');
        chai.expect(sut.vm.windowTitle).to.equal(osWindow.defaultWindowTitle);
      });
    });
  });

  describe('windowState', () => {
    describe('when set', () => {
      it('initialises correctly', () => {
        const expectedPropValue = 'minimized';
        sut = mount(VueOsWindow, {
          propsData: {
            windowState: expectedPropValue,
          },
        });

        const osWindowInstance = sut.get('os-window').element;

        chai.expect(sut.vm.windowState).to.equal(expectedPropValue);
        chai.expect(sut.vm.windowState).to.equal(osWindowInstance.windowState);
      });
    });

    describe('when unset', () => {
      it('initialises correctly', () => {
        sut = mount(VueOsWindow);

        const osWindow = customElements.get('os-window');
        chai.expect(sut.vm.windowState).to.equal(osWindow.defaultWindowState);
      });
    });
  });

  describe('theme', () => {
    describe('when set', () => {
      it('initialises correctly', () => {
        const expectedPropValue = 'dark';
        sut = mount(VueOsWindow, {
          propsData: {
            theme: expectedPropValue,
          },
        });

        const osWindowInstance = sut.get('os-window').element;

        chai.expect(sut.vm.theme).to.equal(expectedPropValue);
        chai.expect(sut.vm.theme).to.equal(osWindowInstance.theme);
      });
    });

    describe('when unset', () => {
      it('initialises correctly', () => {
        sut = mount(VueOsWindow);

        const osWindow = customElements.get('os-window');
        chai.expect(sut.vm.theme).to.equal(osWindow.defaultTheme);
      });
    });
  });

  describe('osTheme', () => {
    describe('when set', () => {
      it('initialises correctly', () => {
        const expectedPropValue = 'mac';
        sut = mount(VueOsWindow, {
          propsData: {
            osTheme: expectedPropValue,
          },
        });

        const osWindowInstance = sut.get('os-window').element;

        chai.expect(sut.vm.osTheme).to.equal(expectedPropValue);
        chai.expect(sut.vm.osTheme).to.equal(osWindowInstance.osTheme);
      });
    });

    describe('when unset', () => {
      it('initialises correctly', () => {
        sut = mount(VueOsWindow);

        const osWindow = customElements.get('os-window');
        chai.expect(sut.vm.osTheme).to.equal(osWindow.defaultOsTheme);
      });
    });
  });

  describe('hover', () => {
    describe('when set', () => {
      it('initialises correctly', () => {
        const expectedPropValue = true;
        sut = mount(VueOsWindow, {
          propsData: {
            hover: expectedPropValue,
          },
        });

        const osWindowInstance = sut.get('os-window').element;

        chai.expect(sut.vm.hover).to.equal(expectedPropValue);
        chai.expect(sut.vm.hover).to.equal(osWindowInstance.hover);
      });
    });

    describe('when unset', () => {
      it('initialises correctly', () => {
        sut = mount(VueOsWindow);

        const osWindowInstance = sut.get('os-window').element;

        chai.expect(sut.vm.hover).to.equal(false);
        chai.expect(sut.vm.hover).to.equal(osWindowInstance.hover);
      });
    });
  });

  describe('interactive', () => {
    describe('when set', () => {
      it('initialises correctly', () => {
        const expectedPropValue = true;
        sut = mount(VueOsWindow, {
          propsData: {
            interactive: expectedPropValue,
          },
        });

        const osWindowInstance = sut.get('os-window').element;

        chai.expect(sut.vm.interactive).to.equal(expectedPropValue);
        chai.expect(sut.vm.interactive).to.equal(osWindowInstance.interactive);
      });
    });

    describe('when unset', () => {
      it('initialises correctly', () => {
        sut = mount(VueOsWindow);

        const osWindowInstance = sut.get('os-window').element;
        chai.expect(sut.vm.interactive).to.equal(false);
        chai.expect(sut.vm.interactive).to.equal(osWindowInstance.interactive);
      });
    });
  });
});
