const { OsWindowVue } = window;
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
        sut = mount(OsWindowVue, {
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
        sut = mount(OsWindowVue);

        const osWindow = customElements.get('os-window');
        chai.expect(sut.vm.windowTitle).to.equal(osWindow.defaultWindowTitle);
      });
    });
  });

  describe('windowState', () => {
    describe('when set', () => {
      it('initialises correctly', () => {
        const expectedPropValue = 'minimized';
        sut = mount(OsWindowVue, {
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
        sut = mount(OsWindowVue);

        const osWindow = customElements.get('os-window');
        chai.expect(sut.vm.windowState).to.equal(osWindow.defaultWindowState);
      });
    });
  });

  describe('theme', () => {
    describe('when set', () => {
      it('initialises correctly', () => {
        const expectedPropValue = 'dark';
        sut = mount(OsWindowVue, {
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
        sut = mount(OsWindowVue);

        const osWindow = customElements.get('os-window');
        chai.expect(sut.vm.theme).to.equal(osWindow.defaultTheme);
      });
    });
  });

  describe('osTheme', () => {
    describe('when set', () => {
      it('initialises correctly', () => {
        const expectedPropValue = 'mac';
        sut = mount(OsWindowVue, {
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
        sut = mount(OsWindowVue);

        const osWindow = customElements.get('os-window');
        chai.expect(sut.vm.osTheme).to.equal(osWindow.defaultOsTheme);
      });
    });
  });

  describe('hover', () => {
    describe('when set', () => {
      it('initialises correctly', () => {
        const expectedPropValue = true;
        sut = mount(OsWindowVue, {
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
        sut = mount(OsWindowVue);

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
        sut = mount(OsWindowVue, {
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
        sut = mount(OsWindowVue);

        const osWindowInstance = sut.get('os-window').element;
        chai.expect(sut.vm.interactive).to.equal(false);
        chai.expect(sut.vm.interactive).to.equal(osWindowInstance.interactive);
      });
    });
  });

  describe('window contents', () => {
    it('is displayed in the window', () => {
      const expected = '<p>hello world</p>';
      sut = mount(OsWindowVue, {
        slots: {
          default: expected,
        },
      });
      chai.expect(sut.html()).to.contain(expected);
    });
  });
});
