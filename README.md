# Data Extraction and Automation Tool

This project is a simple data extraction and automation tool using JavaScript, Puppeteer, and Cheerio. The goal of the tool is to scrape product information from an ecommerce website, including the product title, price, and image URL.

## Features

- Scrape product information (title, price, and image URL) from an ecommerce website
- Easy customization to adapt to different websites
- Async/await syntax for better readability and error handling
- Proxy support to bypass IP-based blocking and improve anonymity
- Parallel scraping for improved performance and speed

## Requirements

- Node.js 12.x or higher
- Puppeteer
- Cheerio

## Installation

1. Clone the repository or download the `data_extraction_tool.js` file.
2. Install the required dependencies using npm:

```bash
npm install puppeteer cheerio
```

## Usage

1. Update the `urls` array in the `data_extraction_tool.js` file with the desired website URLs.
2. Modify the CSS selectors within the `scrapeProductData` function to match the structure of the target website's product elements.
3. If you want to use a proxy, update the `proxy` variable with your proxy server's address and port. If you don't want to use a proxy, set the `proxy` variable to `null`.
4. Run the script using the following command:

```bash
node data_extraction_tool.js
```

The script will output the scraped product data to the console. You can modify the script to save the data to a file or perform other actions as needed.

## Customization

To adapt the script to other websites, you may need to modify the following parts:

- Update the `urls` array with the desired website URLs.
- Update the CSS selectors within the `scrapeProductData` function to match the structure of the target website's product elements.
- Add or remove data fields as needed, adjusting both the scraping logic and the output data structure.
