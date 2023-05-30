const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

const url = 'https://example.com/products'; // Replace with the desired URL
const proxy = 'http://proxy.example.com:8080'; // Replace with your proxy server and port

async function scrapeProductData(url, proxy) {
  const browser = await puppeteer.launch({
    args: [`--proxy-server=${proxy}`],
  });
  const page = await browser.newPage();
  await page.goto(url);

  const content = await page.content();
  const $ = cheerio.load(content);

  const products = [];
  $('.product').each((index, element) => {
    const title = $(element).find('.product-title').text().trim();
    const price = $(element).find('.product-price').text().trim();
    const imageUrl = $(element).find('img').attr('src');

    products.push({
      title,
      price,
      imageUrl,
    });
  });

  await browser.close();
  return products;
}

async function main() {
  try {
    console.log('Scraping product data...');
    const products = await scrapeProductData(url, proxy);
    console.log('Scraped product data:', products);
  } catch (error) {
    console.error('Failed to scrape product data:', error);
  }
}

main();
