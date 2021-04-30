
describe('Voucher Registration Page', () => {

    it('should create voucher - excercise 2', () => {

        browser.url('/voucher');

        // Zjisti, jestli jsou pole Jméno a Příjmení vidět a jsou editovatelné 
        const firstNameField = $('#firstName');
        console.log('First name is displayeddisplayed: ' + firstNameField.isDisplayed());
        console.log('First name is enabled: ' + firstNameField.isEnabled());

        const lastNameField = $('#lastName');
        console.log('Last name is displayed: ' + lastNameField.isDisplayed());
        console.log('Last name is enabled: ' + lastNameField.isEnabled());

        // Zjisti, jaká je dafultní hodnota pole Délka předplatného
        const subscriptionLengthField = $('#months');
        console.log('Default subscription length is: ' + subscriptionLengthField.getAttribute('value'));

        // Zjisti, jestli je Datum narození required
        const birthDateField = $('#date');
        console.log('Birth date is required: ' + birthDateField.getAttribute('required'));

        // Zjisti atribt type pole E-mail
        const emailField = $('#email');
        console.log('Email filed type is: ' + emailField.getAttribute('type'));

        // Zjisti text tlačítka
        const submitButton = $('.voucher-btn-primary');
        console.log('Button text is: ' + submitButton.getText());

        // Vyplň formulář
        firstNameField.setValue('Anička');
        lastNameField.setValue('Testerka');
        subscriptionLengthField.setValue('14');
        birthDateField.setValue('26.4.2001');
        emailField.setValue('testerka.14.2001-05-26@czechitas.cz');
        submitButton.click();

        // Zjisti cenu a kód
        const voucherCard = $('#voucher');
        console.log('Price: ' + voucherCard.$('h3').getText());
        console.log('Code: ' + voucherCard.$('h2').getText());

        // Zjisti zda se objevila tlačítka Aktivovat a Zahodit a jaký mají text
        const activateButton = voucherCard.$('.voucher-btn-primary');
        console.log('Activation button exists: ' + activateButton.isDisplayed());
        console.log('Activation button text is: ' + activateButton.getText());
        
        const cancelButton = voucherCard.$('.voucher-btn-secondary');
        console.log('Cancel button exists: ' + cancelButton.isDisplayed());
        console.log('Cancel button text is: ' + cancelButton.getText());

        // Nakonec udělej screenshot
        browser.saveScreenshot('voucher_page_filled_' + browser.capabilities.browserName + '.png');

    });
    
});