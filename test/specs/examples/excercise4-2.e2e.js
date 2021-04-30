
describe('Voucher Registration Page - excercise 4-2', () => {

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

        const testCases = [
            { ...formData, subscriptionLength: 3, price: '1000 Kč', code: 'QWFUYTE5OTAwNDI2M2FhY3' },
            { ...formData, subscriptionLength: 7, price: '950 Kč', code: 'QWFUYTE5OTAwNDI2N2FhY3' },
            { ...formData, subscriptionLength: 14, price: '850 Kč', code: 'QWFUYTE5OTAwNDI2MTRhYW' },
            { ...formData, subscriptionLength: 21, price: '650 Kč', code: 'QWFUYTE5OTAwNDI2MjFhYW' },
        ]

        testCases.forEach( testCase => {

            it('should generate correct price and code for ' + testCase.subscriptionLength + ' month sbscription', () => {
    
                $('#firstName').setValue(testCase.firstName);
                $('#lastName').setValue(testCase.lastName);
                $('#months').setValue(testCase.subscriptionLength);
                $('#date').setValue(testCase.birthDate);
                $('#email').setValue(testCase.email);
                $('.voucher-btn-primary').click();
    
                takeScreenshot(testCases.subscriptionLength);
    
                const voucherCard = $('#voucher');
                expect(voucherCard.$('h3')).toHaveText(testCase.price);
                expect(voucherCard.$('h2')).toHaveText(testCase.code);
            });

        });

    });

    describe('Price by age', () => {

        const testCases = [
            { ...formData, birthDate: '26.4.2000', price: '850 Kč', code: 'QWFUYTIwMDAwNDI2M2FhY3' },
            { ...formData, birthDate: '26.4.1990', price: '1000 Kč', code: 'QWFUYTE5OTAwNDI2M2FhY3' },
            { ...formData, birthDate: '26.4.1960', price: '750 Kč', code: 'QWFUYTE5NjAwNDI2M2FhY3' },
        ]

        testCases.forEach( testCase => {

            it('should generate correct price for birth date ' + testCases.birthDate, () => {

                $('#firstName').setValue(testCase.firstName);
                $('#lastName').setValue(testCase.lastName);
                $('#months').setValue(testCase.subscriptionLength);
                $('#date').setValue(testCase.birthDate);
                $('#email').setValue(testCase.email);
                $('.voucher-btn-primary').click();
    
                takeScreenshot(testCases.birthDate);
    
                const voucherCard = $('#voucher');
                expect(voucherCard.$('h3')).toHaveText(testCase.price);
                expect(voucherCard.$('h2')).toHaveText(testCase.code);
            });
        });

    });
    
});

function takeScreenshot(id) {
    browser.saveScreenshot('voucher_subscription_' + id + '_' + browser.capabilities.browserName + '.png');
}