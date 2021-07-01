/* eslint-disable no-undef */
describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have "Step One" section', async () => {
    await expect(element(by.text('Step One'))).toBeVisible();
  });

  it('should have "See Your Changes" section', async () => {
    await expect(element(by.text('See Your Changes'))).toBeVisible();
  });

  it('should have "Layout" text', async () => {
    await waitFor(element(by.text('Layout')))
      .toBeVisible()
      .whileElement(by.id('scroll'))
      .scroll(500, 'down');
  });
});
