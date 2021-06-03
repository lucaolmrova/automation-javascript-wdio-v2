class VouchersPage {

    get firstNameField(){ return $('#firstName') };
    get lastNameField(){ return $('#lastName') };
    get subscriptionLength(){ return $('#months') };
    get birthDate(){ return $('#date') };
    get emailField(){ return $('#email') };
    get submitButton(){ return $('.voucher-btn-primary') };
    get voucherCard(){ return $('#voucher') };
    get voucherSuccess(){ return $('.voucher-success') };
    get activateButton(){ return $('#voucher > div:nth-child(3) > div.voucher-btn-primary.btn.btn-primary.col') };
    get trashButton(){ return $('#voucher > div:nth-child(3) > div.voucher-btn-secondary.btn.btn-secondary.col') };

}
module.exports = new VouchersPage();
