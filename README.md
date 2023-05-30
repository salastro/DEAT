# Data Extraction and Automation Tool

This project is a simple data extraction and automation tool using JavaScript, Puppeteer, and Cheerio. The goal of the tool is to scrape product information from an ecommerce website, including the product title, price, and image URL.

## Features

- Scrape product information (title, price, and image URL) from an ecommerce website
- Easy customization to adapt to different websites
- Async/await syntax for better readability and error handling

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

1. Update the `url` variable in the `data_extraction_tool.js` file with the desired website URL.
2. Modify the CSS selectors within the `scrapeProductData` function to match the structure of the target website's product elements.
3. Run the script using the following command:

```bash
node data_extraction_tool.js
```

The script will output the scraped product data to the console. You can modify the script to save the data to a file or perform other actions as needed.

## Customization

To adapt the script to other websites, you may need to modify the following parts:

- Update the `url` variable with the desired website URL.
- Update the CSS selectors within the `scrapeProductData` function to match the structure of the target website's product elements.
- Add or remove data fields as needed, adjusting both the scraping logic and the output data structure.
