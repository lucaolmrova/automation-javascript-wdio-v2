
describe('Voucher Registration Page', () => {

    it('should open voucher page', () => {
        
        browser.reloadSession();
        
        browser.url('/voucher');

        browser.pause(5000);
        
    });
    
});