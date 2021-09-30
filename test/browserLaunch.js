/* global browser */

import {it, jest} from '@jest/globals';

jest.setTimeout(10000);

it('DevTools show "Web Audio" tab', async () => {
  const wsEndpoint = browser.wsEndpoint();

  const myPage = await browser.newPage();
  const pageId = myPage.target()._targetId;

  const pageTargeUrl = `${
    wsEndpoint.replace('ws://', '').match(/.*(?=\/browser)/)[0]
  }/page/${pageId}`;

  const pageDebuggingUrl = `devtools://devtools/bundled/devtools_app.html?ws=${pageTargeUrl}`;

  const devtoolsPage = await browser.newPage();
  await devtoolsPage.bringToFront();
  await devtoolsPage.goto(pageDebuggingUrl);

  let selectedTab = null;

  while (!selectedTab) {
    await devtoolsPage.keyboard.down('MetaLeft');
    await devtoolsPage.keyboard.press(']');
    await devtoolsPage.keyboard.up('MetaLeft');

    selectedTab = await devtoolsPage.evaluate(() => {
      const tabs = document.querySelector(
        '#-blink-dev-tools > div.widget.vbox.root-view > div > div > div',
      );

      if (!tabs) {
        return null;
      }

      return tabs.shadowRoot.querySelector(
        '[aria-label="Web Audio"][aria-selected="true"]',
      );
    });
  }
});
