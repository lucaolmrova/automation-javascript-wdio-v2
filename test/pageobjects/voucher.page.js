class VoucherPage {

    get firstNameField() { return $('#firstName'); }
    get lastNameField() { return $('#lastName'); }
    get subscriptionLengthField() { return $('#months'); }
    get birthDateField() { return $('#date'); }
    get emailField() { return $('#email'); }
    get submitButton() { return $('#voucher-form').$('.voucher-btn-primary'); }
    get voucherCard() { return $('#voucher') }

    open() {
        return browser.url('/voucher');
    }

    submitForm(formData) {
        this.firstNameField.setValue(formData.firstName);
        this.lastNameField.setValue(formData.lastName);
        this.subscriptionLengthField.setValue(formData.subscriptionLength);
        this.birthDateField.setValue(formData.birthDate);
        this.emailField.setValue(formData.email);
        this.submitButton.click();
    }

    get voucherPrice() {
        return this.voucherCard.$('h3').getText();
    }

    get voucherCode() {
        return this.voucherCard.$('h2').getText();
    }

    takeScreenshot(id) {
        browser.saveScreenshot('voucher_subscription_' + id + '_' + browser.capabilities.browserName + '.png');
    }
}

module.exports = new VoucherPage();