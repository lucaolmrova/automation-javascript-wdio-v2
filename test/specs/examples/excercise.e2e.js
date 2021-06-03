describe('Voucher Registration Page', () => {

   it('should create voucher - excercise 3', () => {

      browser.url('/voucher');

       Zjisti, jestli jsou pole Jméno a Příjmení vidět a jsou editovatelné 
//       const firstNameField = $('#firstName');
//       expect(firstNameField).toBeDisplayed();
//       expect(firstNameField).toBeEnabled();

//       const lastNameField = $('#lastName');
//       expect(lastNameField).toBeDisplayed();
//       expect(lastNameField).toBeEnabled();

//       // Zjisti, jaká je dafultní hodnota pole Délka předplatného
//       const subscriptionLengthField = $('#months');
//       expect(subscriptionLengthField).toHaveAttribute('value', '3');

//       // Zjisti, jestli je Datum narození required
//       const birthDateField = $('#date');
//       expect(birthDateField).toHaveAttribute('required');

//       // Zjisti atribt type pole E-mail
//       const emailField = $('#email');
//       expect(emailField).toHaveAttribute('type', 'email');

//       // Zjisti text tlačítka
//       const submitButton = $('.voucher-btn-primary');
//       expect(submitButton).toHaveText('Vygenerovat kód');

//       // Vyplň formulář
//       firstNameField.setValue('Anička');
//       lastNameField.setValue('Testerka');
//       subscriptionLengthField.setValue(1);
//       birthDateField.setValue('26.4.2000');
//       emailField.setValue('anicka.testerka@czechitas.cz');
//       submitButton.click();

//       // Zjisti cenu a kód
//       /* const voucherCard = $('#voucher');
//       expect(voucherCard.$('h3')).toHaveText('850 Kč');
//       expect(voucherCard.$('h2')).toHaveText('QWFUYTIwMDAwNDI2NmFhY3'); */

//      // const voucherBackground = $('.voucher-success jumbotron');
//     // expect(voucherBackground).toHaveValue('66cdaa')

//       // Zjisti zda se objevila tlačítka Aktivovat a Zahodit a jaký mají text
//       const activateButton = voucherCard.$('.voucher-btn-primary');
//       expect(activateButton).toBeDisplayed();
//       expect(activateButton).toHaveText('Aktivovat');
      
//       const cancelButton = voucherCard.$('.voucher-btn-secondary');
//       expect(cancelButton).toBeDisplayed();
//       expect(cancelButton).toHaveText('Zahodit');

//       // Nakonec udělej screenshot
//       browser.saveScreenshot('voucher_page_filled_' + browser.capabilities.browserName + '.png');

//   });
  
// });