
describe('Voucher Registration Page', () => {

    it('should open voucher page - excercise 1', () => {
        
        browser.url('/voucher');
        
        const windowSize = browser.getWindowSize();
        console.log(windowSize);

        const allCookies = browser.getCookies();
        console.log(allCookies);

        browser.saveScreenshot('voucher_page_' + browser.capabilities.browserName + '.png');

        browser.pause(5000);
    });
    
});