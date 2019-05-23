import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

// import { element } from '@angular/core/src/render3';
import { element, by, Key } from 'protractor';

const params = '?insuredName=Don&policyNumber=00025649&agentEmail=penny@integrityins.com';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Visit page, verify passed in data in correct fields', () => {
    page.navigateTo(params);
    expect(page.getAgentEmail()).toBe('penny@integrityins.com');
  });

  it('enter and verify new email address', () => {
    page.navigateTo(params);
    const newEmail = 'shekarbalan@texasmutual.com';
    page.setAgentEmail(newEmail);
    expect(page.getAgentEmail()).toBe(newEmail);
  });

  it('checks that invalid dates are flagged', () => {
    page.navigateTo(params);
    page.setEffectiveDate('4/31/2018');
    expect(page.getEffectiveDate()).toBe('Invalid date');
  });

  it('selects Alternate Employer and enters appropriate information', () => {
    page.navigateTo(params);
    element(by.id('radioBtnAlternateEmployer')).click();
    const altEmpData = 'Some Other Construction Company, 123 Main St., San Marcos, TX';
    element(by.id('alternateTextMessage')).clear().then( () => {
      element(by.id('alternateTextMessage')).sendKeys(altEmpData);
    });
    expect(page.getAlternateEmployerData()).toBe(altEmpData);
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
