const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

const urls = [
  'https://example.com/products/page1',
  'https://example.com/products/page2',
  // Add more URLs as needed
];

const proxy = 'http://proxy.example.com:8080'; // Replace with your proxy server and port, or set to null for no proxy

async function scrapeProductData(url, proxy) {
  const browser = await puppeteer.launch({
    args: proxy ? [`--proxy-server=${proxy}`] : [],
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
    const promises = urls.map((url) => scrapeProductData(url, proxy));
    const results = await Promise.all(promises);

    // Flatten the results array and output the scraped product data
    const products = [].concat(...results);
    console.log('Scraped product data:', products);
  } catch (error) {
    console.error('Failed to scrape product data:', error);
  }
}

main();
