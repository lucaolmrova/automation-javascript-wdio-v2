
describe('Voucher Registration Page - excercise 4-1', () => {

    const formData = {
        firstName: 'Anička',
        lastName: 'Testerka',
        subscriptionLength: 3,
        birthDate: '26.4.1990',
        email: 'anicka.testerka@czechitas.cz'
    }

    beforeEach(() => {
        browser.url('/voucher');
    });

    describe('Form validation', () => {

        it('should validate default form state', () => {

            const firstNameField = $('#firstName');
            expect(firstNameField).toBeDisplayed();
            expect(firstNameField).toBeEnabled();
            expect(firstNameField).toHaveText('');

            const lastNameField = $('#lastName');
            expect(lastNameField).toBeDisplayed();
            expect(lastNameField).toBeEnabled();
            expect(firstNameField).toHaveText('');

            const subscriptionLengthField = $('#months');
            expect(subscriptionLengthField).toHaveAttribute('value', 3);

            const birthDateField = $('#date');
            expect(birthDateField).toHaveAttribute('required');

            const emailField = $('#email');
            expect(emailField).toHaveAttribute('type', 'email');
            expect(emailField).toHaveText('');

            const submitButton = $('.voucher-btn-primary');
            expect(submitButton).toHaveText('Vygenerovat kód');
        });

    });

    describe('Price by subscription length', () => {

        beforeEach(() => {
            $('#firstName').setValue(formData.firstName);
            $('#lastName').setValue(formData.lastName);
            $('#date').setValue(formData.date);
            $('#email').setValue(formData.email);
        });

        it('should generate correct price and code for 3 month sbscription', () => {

            const subscriptionLength = 3;

            $('#months').setValue(subscriptionLength);
            $('.voucher-btn-primary').click();

            browser.saveScreenshot('voucher_subscription_' + subscriptionLength + '_' + browser.capabilities.browserName + '.png');

            const voucherCard = $('#voucher');
            expect(voucherCard.$('h3')).toHaveText('1000 Kč');
            expect(voucherCard.$('h2')).toHaveText('QWFUYTE5OTAwMzIyM2FhY3');
        });
    
        it('should generate correct price and code for 7 month sbscription', () => {

            const subscriptionLength = 7;

            $('#months').setValue(subscriptionLength);
            $('.voucher-btn-primary').click();

            takeScreenshot(subscriptionLength);

            const voucherCard = $('#voucher');
            expect(voucherCard.$('h3')).toHaveText('950 Kč');
            expect(voucherCard.$('h2')).toHaveText('QWFUYTE5OTAwMzIyN2FhY3');
        });
    
        it('should generate correct price and code for 14 month sbscription', () => {

            const subscriptionLength = 14;

            $('#months').setValue(subscriptionLength);
            $('.voucher-btn-primary').click();

            takeScreenshot(subscriptionLength);

            const voucherCard = $('#voucher');
            expect(voucherCard.$('h3')).toHaveText('850 Kč');
            expect(voucherCard.$('h2')).toHaveText('QWFUYTE5OTAwMzIyMTRhYW');
        });
    
        it('should generate correct price and code for 20 month sbscription', () => {
            
            const subscriptionLength = 21;

            $('#months').setValue(subscriptionLength);
            $('.voucher-btn-primary').click();

            takeScreenshot(subscriptionLength);
            
            const voucherCard = $('#voucher');
            expect(voucherCard.$('h3')).toHaveText('650 Kč');
            expect(voucherCard.$('h2')).toHaveText('QWFUYTE5OTAwMzIyMjFhYW');
        });

    });

    describe('Price by age', () => {

        beforeEach(() => {
            $('#firstName').setValue(formData.firstName);
            $('#lastName').setValue(formData.lastName);
            $('#months').setValue(formData.subscriptionLength);
            $('#email').setValue(formData.email);
        });

        it('should generate correct price for 24 year old', () => {

            const birthDate = '26.4.2000';

            $('#date').setValue(birthDate);
            $('.voucher-btn-primary').click();

            takeScreenshot(birthDate);

            const voucherCard = $('#voucher');
            expect(voucherCard.$('h3')).toHaveText('850 Kč');
            expect(voucherCard.$('h2')).toHaveText('QWFUYTIwMDAwNDI2M2FhY3');
        });

        it('should generate correct price for 25 year old', () => {

            const birthDate = '26.4.1990';

            $('#date').setValue(birthDate);
            $('.voucher-btn-primary').click();

            takeScreenshot(birthDate);

            const voucherCard = $('#voucher');
            expect(voucherCard.$('h3')).toHaveText('1000 Kč');
            expect(voucherCard.$('h2')).toHaveText('QWFUYTE5OTAwNDI2M2FhY3');

        });

        it('should generate correct price for 56 year old', () => {

            const birthDate = '26.4.1960';

            $('#date').setValue(birthDate);
            $('.voucher-btn-primary').click();

            takeScreenshot(birthDate);

            const voucherCard = $('#voucher');
            expect(voucherCard.$('h3')).toHaveText('750 Kč');
            expect(voucherCard.$('h2')).toHaveText('QWFUYTE5NjAwNDI2M2FhY3');
            
        });

    });
    
});

function takeScreenshot(id) {
    browser.saveScreenshot('voucher_subscription_' + id + '_' + browser.capabilities.browserName + '.png');
}