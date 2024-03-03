import puppeteer from "puppeteer";
import express from "express";
import cors from "cors"
const app= express()
app.use(cors())
app.get('/',async (req,res) => {
    const sq = req.query.q;
    let url = "https://www.flipkart.com/search?q="+sq;
    console.log(sq)
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        try{await page.goto(url);}
        catch{res.send("wating for query")}
    
        const productDetails = await page.evaluate(() => {
            const products = Array.from(document.querySelectorAll('._2kHMtA'));
            return products.map(product => {
                const img = product.querySelector('._396cs4').src
                const pname = product.querySelector('._4rR01T').innerText;
                const price = product.querySelector('._30jeq3._1_WHN1').innerText;
                return { img , pname, price };
            });
        });
        console.log(productDetails)
        res.json(productDetails);
    
        await browser.close();
    })
    app.listen(3002, () => {
        console.log(`Server listening at http://localhost:${3002}`);
      });
