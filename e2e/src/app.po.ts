import { browser, by, element, Key } from 'protractor';
import { SeleniumServer } from 'selenium-webdriver/remote';

export class AppPage {

  navigateTo( params: string ) {
    return browser.get(browser.baseUrl + params) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('.margin-top-50')).getText();
  }

  getAgentEmail() {
    return element(by.id('agentEmail')).getAttribute('value');
  }

  setAgentEmail(newEmail) {
    element(by.id('agentEmail')).clear().then( () => {
      element(by.id('agentEmail')).sendKeys(newEmail);
    });
  }
  // Alternate way to clear without handling promise...
  // setAgentEmail(newEmail) {
  //   element(by.id('agentEmail')).sendKeys(Key.chord(Key.CONTROL, 'a'), newEmail);
  // }

  setEffectiveDate( dateStr ) {
    element(by.id('effectiveDate')).sendKeys(dateStr, Key.ENTER);
  }

  getEffectiveDate() {
    return element(by.id('effectiveDate')).getAttribute('value');
  }

  getAlternateEmployerData() {
    return element(by.id('alternateTextMessage')).getAttribute('value');
  }

  chooseAlternateEmployerChange() {
    element(by.id('radioBtnAlternateEmployer')).click();
  }

  setAlternateEmployerData(altEmpData: string) {
    element(by.id('alternateTextMessage')).clear().then( () => {
      element(by.id('alternateTextMessage')).sendKeys(altEmpData);
    });
  }

}
