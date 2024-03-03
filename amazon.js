import express from "express";
import puppeteer from "puppeteer";
import cors from "cors"
const app = express();
app.use(cors())
app.get('/', async (req, res) => {
  const sq = req.query.q;
  let url = "https://www.amazon.in/s?k="+sq;
  console.log(sq)
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{await page.goto(url)
}catch{res.send("waiting for query")}
  const productDetails = await page.evaluate(() => {
    const products = Array.from(document.querySelectorAll('.s-result-item'));
    return products.map(product => {
      const priceElement = product.querySelector('.a-price-whole');
      const pnameElement = product.querySelector('.a-link-normal .a-text-normal');
      const imgElement = product.querySelector('.s-image');
      if (priceElement && pnameElement && imgElement) {
        const price = priceElement.innerText;
        const pname = pnameElement.innerText;
        const img = imgElement.src;
        return { img, pname, price };
      }
    }).filter(Boolean);  // This will remove undefined values
  });
  console.log(productDetails)
  res.json(productDetails);

  await browser.close();
});

app.listen(3001, () => {
  console.log(`Server listening at http://localhost:${3001}`);
});
