import VoucherPage from '../../pageobjects/voucher.page.js'

describe('Voucher Registration Page - excercise 5', () => {

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
            expect(VoucherPage.firstNameField).toBeDisplayed();
            expect(VoucherPage.firstNameField).toBeEnabled();
            expect(VoucherPage.firstNameField).toHaveText('');
            expect(VoucherPage.lastNameField).toBeDisplayed();
            expect(VoucherPage.lastNameField).toBeEnabled();
            expect(VoucherPage.firstNameField).toHaveText('');
            expect(VoucherPage.subscriptionLengthField).toHaveAttribute('value', 3);
            expect(VoucherPage.birthDateField).toHaveAttribute('required');
            expect(VoucherPage.emailField).toHaveAttribute('type', 'email');
            expect(VoucherPage.emailField).toHaveText('');
            expect(VoucherPage.submitButton).toHaveText('Vygenerovat kód');
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
                VoucherPage.submitForm(testCase);
                VoucherPage.takeScreenshot(testCase.subscriptionLength);
                expect(VoucherPage.voucherPrice).toEqual(testCase.price);
                expect(VoucherPage.voucherCode).toEqual(testCase.code);
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
                VoucherPage.submitForm(testCase);
                VoucherPage.takeScreenshot(testCase.birthDate);
                expect(VoucherPage.voucherPrice).toEqual(testCase.price);
                expect(VoucherPage.voucherCode).toEqual(testCase.code);
            });
        });

    });
    
});