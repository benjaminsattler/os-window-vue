const VueOsWindow = VueOsWindowPlugin.default;
const { mount } = VueTestUtils;

describe('properties', () => {
  let sut;
  afterEach(() => {
    sut.destroy();
  });
  describe('windowTitle', () => {
    it('reflects change to os-window', async () => {
      const expectedPropValue = 'expected prop value';
      sut = mount(VueOsWindow);
      const osWindowInstance = sut.get('os-window').element;

      sut.setProps({ windowTitle: expectedPropValue });
      await Vue.nextTick();

      chai.expect(sut.vm.windowTitle).to.equal(expectedPropValue);
      chai.expect(osWindowInstance.windowTitle).to.equal(expectedPropValue);
      chai.expect(osWindowInstance.getAttribute('window-title')).to.equal(expectedPropValue);
    });
  });

  describe('windowState', () => {
    const osWindow = customElements.get('os-window');
    osWindow.supportedWindowStates.forEach((expectedPropValue) => {
      it(`reflects change to ${expectedPropValue} to os-window`, async () => {
        sut = mount(VueOsWindow);
        const osWindowInstance = sut.get('os-window').element;

        sut.setProps({ windowState: expectedPropValue });
        await Vue.nextTick();

        chai.expect(sut.vm.windowState).to.equal(expectedPropValue);
        chai.expect(osWindowInstance.windowState).to.equal(expectedPropValue);
        chai.expect(osWindowInstance.getAttribute('window-state')).to.equal(expectedPropValue);
      });
    });
  });

  describe('theme', () => {
    const osWindow = customElements.get('os-window');
    osWindow.supportedThemes.forEach((expectedPropValue) => {
      it(`reflects change to ${expectedPropValue} to os-window`, async () => {
        sut = mount(VueOsWindow);
        const osWindowInstance = sut.get('os-window').element;

        sut.setProps({ theme: expectedPropValue });
        await Vue.nextTick();

        chai.expect(sut.vm.theme).to.equal(expectedPropValue);
        chai.expect(osWindowInstance.theme).to.equal(expectedPropValue);
        chai.expect(osWindowInstance.getAttribute('theme')).to.equal(expectedPropValue);
      });
    });
  });

  describe('osTheme', () => {
    const osWindow = customElements.get('os-window');
    osWindow.supportedOsThemes.forEach((expectedPropValue) => {
      it(`reflects change to ${expectedPropValue} to os-window`, async () => {
        sut = mount(VueOsWindow);
        const osWindowInstance = sut.get('os-window').element;

        sut.setProps({ osTheme: expectedPropValue });
        await Vue.nextTick();

        chai.expect(sut.vm.osTheme).to.equal(expectedPropValue);
        chai.expect(osWindowInstance.osTheme).to.equal(expectedPropValue);
        chai.expect(osWindowInstance.getAttribute('os-theme')).to.equal(expectedPropValue);
      });
    });
  });

  describe('hover', () => {
    [true, false].forEach((expectedPropValue) => {
      it(`reflects change to ${expectedPropValue} to os-window`, async () => {
        sut = mount(VueOsWindow);
        const osWindowInstance = sut.get('os-window').element;

        sut.setProps({ hover: expectedPropValue });
        await Vue.nextTick();

        chai.expect(sut.vm.hover).to.equal(expectedPropValue);
        chai.expect(osWindowInstance.hover).to.equal(expectedPropValue);
        chai.expect(osWindowInstance.hasAttribute('hover')).to.equal(expectedPropValue);
      });
    });
  });

  describe('interactive', () => {
    [true, false].forEach((expectedPropValue) => {
      it(`reflects change to ${expectedPropValue} to os-window`, async () => {
        sut = mount(VueOsWindow);
        const osWindowInstance = sut.get('os-window').element;

        sut.setProps({ interactive: expectedPropValue });
        await Vue.nextTick();

        chai.expect(sut.vm.interactive).to.equal(expectedPropValue);
        chai.expect(osWindowInstance.interactive).to.equal(expectedPropValue);
        chai.expect(osWindowInstance.hasAttribute('interactive')).to.equal(expectedPropValue);
      });
    });
  });
});
