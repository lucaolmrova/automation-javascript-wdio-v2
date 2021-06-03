import VouchersPage from './vouchers.page.js'
describe("Registracni formular", () => {

  beforeEach(() => { 
    browser.url('/voucher'); });
  
  afterEach(() => { 
    browser.saveScreenshot('form' + browser.capabilities.browserName + '.png'); });

  describe("Form in default", () => {
    it("All fields are displayed and enabled", () => {
      expect(VouchersPage.firstNameField).toBeDisplayed();
      expect(VouchersPage.firstNameField).toBeEnabled();
      expect(VouchersPage.lastNameField).toBeDisplayed();
      expect(VouchersPage.lastNameField).toBeEnabled();
      expect(VouchersPage.subscriptionLength).toHaveAttribute("value", "3");
      expect(VouchersPage.birthDate).toHaveAttribute("required");
      expect(VouchersPage.emailField).toHaveAttribute("required");
    });
  });
  describe("Code generating by subscription length", () => {
    afterEach(() => { 
      expect(VouchersPage.voucherSuccess).toBeDisplayed();
      expect(VouchersPage.voucherSuccess).toBeDisplayed();
      expect(VouchersPage.activateButton).toBeDisplayed();
      expect(VouchersPage.activateButton).toBeEnabled();
      expect(VouchersPage.trashButton).toBeDisplayed();
      expect(VouchersPage.trashButton).toBeEnabled();
      console.log('Voucher is generated, Activate and Trash buttons are visible and enabled');
     });
    it("Subscription length 1 month", () => {
      VouchersPage.firstNameField.setValue("Anička");
      VouchersPage.lastNameField.setValue("Testerka");
      VouchersPage.subscriptionLength.setValue(1);
      VouchersPage.birthDate.setValue("26.4.1990");
      VouchersPage.emailField.setValue("anicka.testerka@czechitas.cz");
      VouchersPage.submitButton.click();
      expect(VouchersPage.voucherCard.$("h3")).toHaveText("1000 Kč");

    });
    it("Subscription length 7 months", () => {
      VouchersPage.firstNameField.setValue("Anička");
      VouchersPage.lastNameField.setValue("Testerka");
      VouchersPage.subscriptionLength.setValue(7);
      VouchersPage.birthDate.setValue("26.4.1990");
      VouchersPage.emailField.setValue("anicka.testerka@czechitas.cz");
      VouchersPage.submitButton.click();
      expect(VouchersPage.voucherCard.$("h3")).toHaveText("950 Kč");
    });
    it("Subscription length 13 months", () => {
      VouchersPage.firstNameField.setValue("Anička");
      VouchersPage.lastNameField.setValue("Testerka");
      VouchersPage.subscriptionLength.setValue(13);
      VouchersPage.birthDate.setValue("26.4.1990");
      VouchersPage.emailField.setValue("anicka.testerka@czechitas.cz");
      VouchersPage.submitButton.click();
      expect(VouchersPage.voucherCard.$("h3")).toHaveText("850 Kč");
    });
    it("Subscription length 21 months", () => {
      VouchersPage.firstNameField.setValue("Anička");
      VouchersPage.lastNameField.setValue("Testerka");
      VouchersPage.subscriptionLength.setValue(21);
      VouchersPage.birthDate.setValue("26.4.1990");
      VouchersPage.emailField.setValue("anicka.testerka@czechitas.cz");
      VouchersPage.submitButton.click();
      expect(VouchersPage.voucherCard.$("h3")).toHaveText("650 Kč");
    });
  });
  describe("Code generating by subscription age", () => {
    it("Age less than 24 years, sub.length 1month", () => {
      VouchersPage.firstNameField.setValue("Anička");
      VouchersPage.lastNameField.setValue("Testerka");
      VouchersPage.subscriptionLength.setValue(1);
      VouchersPage.birthDate.setValue("26.4.2000");
      VouchersPage.emailField.setValue("anicka.testerka@czechitas.cz");
      VouchersPage.submitButton.click();
      expect(VouchersPage.voucherCard.$("h3")).toHaveText("850 Kč");
    });
    it("Age more than 56 years, sub.length 1month", () => {
      VouchersPage.firstNameField.setValue("Anička");
      VouchersPage.lastNameField.setValue("Testerka");
      VouchersPage.subscriptionLength.setValue(1);
      VouchersPage.birthDate.setValue("26.4.1950");
      VouchersPage.emailField.setValue("anicka.testerka@czechitas.cz");
      VouchersPage.submitButton.click();
      expect(VouchersPage.voucherCard.$("h3")).toHaveText("750 Kč");
    });
  });
});
