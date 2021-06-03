import VouchersPage from './vouchers.page.js'

describe("Fill in form without all valid information", () => {
  beforeEach(() => { 
    browser.url('/voucher'); });
  
  afterEach(() => { 
    browser.saveScreenshot('validate' + browser.capabilities.browserName + '.png'); 
  });

  it("All fields are filled in", () => {
    VouchersPage.firstNameField.setValue('Luca');
    VouchersPage.lastNameField.setValue('Olmrova');
    VouchersPage.subscriptionLength.setValue('4');
    VouchersPage.birthDate.setValue('17.10.1992');
    VouchersPage.emailField.setValue('olmrova@gmail.com');
    VouchersPage.submitButton.click();
    expect(VouchersPage.activateButton).toBeDisplayed();
    expect(VouchersPage.activateButton).toBeEnabled();
    expect(VouchersPage.trashButton).toBeDisplayed();
    expect(VouchersPage.trashButton).toBeEnabled();
    expect(VouchersPage.voucherCard).toBeDisplayed();
  });
  it("First name is not filled in", () => {
    VouchersPage.firstNameField.setValue('');
    VouchersPage.lastNameField.setValue('Olmrova');
    VouchersPage.subscriptionLength.setValue('4');
    VouchersPage.birthDate.setValue('17.10.1992');
    VouchersPage.emailField.setValue('olmrova@gmail.com');
    VouchersPage.submitButton.click();
    expect($('.invalid-feedback')).toHaveText('Pole je požadované');
  });
  it("Last name is not filled in", () => {
    VouchersPage.firstNameField.setValue('Luca');
    VouchersPage.lastNameField.setValue('');
    VouchersPage.subscriptionLength.setValue('4');
    VouchersPage.birthDate.setValue('17.10.1992');
    VouchersPage.emailField.setValue('olmrova@gmail.com');
    VouchersPage.submitButton.click();
    const lastNameFailed = $('div.justify-content-md-center:nth-child(2) > div:nth-child(1) > div:nth-child(3)')
    expect(lastNameFailed).toBeDisplayed();
  });
/* zkousela jsem ruzne varianty, aby slo zautomatizovat vyplneni formulare bez vyplneni delky predplatneho, ale zadna varianta mi neprosla at jsem se snazila sebevic, posilam tedy, jak bych to teoreticky zkusila, pokud by to proslo:
  it("Subcription length to have invalid value", () => {
    VouchersPage.firstNameField.setValue('Luca');
    VouchersPage.lastNameField.setValue('Olmrova');
    VouchersPage.subscriptionLength.setValue(' ');
    VouchersPage.birthDate.setValue('17.10.1992');
    VouchersPage.emailField.setValue('olmrova@gmail.com');
    VouchersPage.submitButton.click();
    const subLengthFailed = $('div.justify-content-md-center:nth-child(3) > div:nth-child(1) > div:nth-child(3)');
    expect(subLengthFailed).toBeDisplayed();
  }); */ 
/*u tohoto pripadu se mi take nepodarilo navzdory intenzivni snaze proces zautomatizovat, zkousela jsem ruzne hodnoty, ale nakonec mi chrome vzdy vyplni defaultni datum narozeni, zde k nahledu, jak bych to zkusila resit:
    it("Birthdate in invalid format", () => {
    VouchersPage.firstNameField.setValue('Luca');
    VouchersPage.lastNameField.setValue('Olmrova');
    VouchersPage.subscriptionLength.setValue('4');
    VouchersPage.birthDate.setValue('dd.mm.yyyy');
    VouchersPage.emailField.setValue('olmrova@gmail.com');
    VouchersPage.submitButton.click();
    const birthFailed = $('div.justify-content-md-center:nth-child(4) > div:nth-child(1) > div:nth-child(3)');
    expect(birthFailed).toBeDisplayed();
  }); */
  it("Email is not filled in", () => {
    VouchersPage.firstNameField.setValue('Luca');
    VouchersPage.lastNameField.setValue('Olmrova');
    VouchersPage.subscriptionLength.setValue('4');
    VouchersPage.birthDate.setValue('17.10.1992');
    VouchersPage.emailField.setValue(' ');
    VouchersPage.submitButton.click();
    const emailFailed = $('div.justify-content-md-center:nth-child(5) > div:nth-child(1) > div:nth-child(3)');
    expect(emailFailed).toBeDisplayed();
  });
});
