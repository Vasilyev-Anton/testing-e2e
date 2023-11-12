import puppeteer from 'puppeteer';

describe('CardFormWidget E2E Tests', () => {
    let browser;
    let page;
    
    beforeEach(async () => {
      browser = await puppeteer.launch({
        headless: false,
        slowMo: 100,
        devtools: true,
      });
  
      page = await browser.newPage();
      await page.goto('http://localhost:9000');
    });

    test('should add appropriate classes for MIR', async () => {
      await page.type('.input', '2202200975987809');
      await page.click('.submit');
      const mirElement = await page.$eval('.mir-wrapper', (el) => el.classList.contains('active-mir'));
      expect(mirElement).toBeTruthy();
    }, 10000);

    test('should add appropriate classes for Visa', async () => {
        await page.type('.input', '4485807859041505');
        await page.click('.submit');
        const visaElement = await page.$eval('.visa-wrapper', (el) => el.classList.contains('active-visa'));
        expect(visaElement).toBeTruthy();
    }, 10000);

    test('should add appropriate classes for MasterCard', async () => {
        await page.type('.input', '5556048775163989');
        await page.click('.submit');
        const mcElement = await page.$eval('.mastercard-wrapper', (el) => el.classList.contains('active-mastercard'));
        expect(mcElement).toBeTruthy();
    }, 10000);

    test('should add appropriate classes for UnionPay', async () => {
      await page.type('.input', '6233123456789102');
      await page.click('.submit');
      const unpElement = await page.$eval('.unionpay-wrapper', (el) => el.classList.contains('active-unionpay'));
      expect(unpElement).toBeTruthy();
    }, 10000);

    test('should add appropriate classes for JCB', async () => {
      await page.type('.input', '3530199053936129');
      await page.click('.submit');
      const jcbElement = await page.$eval('.jcb-wrapper', (el) => el.classList.contains('active-jcb'));
      expect(jcbElement).toBeTruthy();
    }, 10000);

    test('should add appropriate classes for American Express', async () => {
      await page.type('.input', '341849132087832');
      await page.click('.submit');
      const AEXElement = await page.$eval('.americanexpress-wrapper', (el) => el.classList.contains('active-americanexpress'));
      expect(AEXElement).toBeTruthy();
    }, 10000)

    test('should add appropriate classes for Discover', async () => {
      await page.type('.input', '6011104426462937');
      await page.click('.submit');
      const dcElement = await page.$eval('.discover-wrapper', (el) => el.classList.contains('active-discover'));
      expect(dcElement).toBeTruthy();
    }, 10000)

    afterEach(async () => {
      await browser.close();
    });
});
