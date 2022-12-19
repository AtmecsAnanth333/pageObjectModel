import { test, chromium, expect,ElementHandle,Page } from "@playwright/test";
import HeaderPage from "../page/header.page";
import sandBoxPage from "../page/login.page";
import Env from "../utills/environment";

let header:HeaderPage;
let boxpage:sandBoxPage;

    test('Launch browser', async()=>{
        const browser = await chromium.launch({
           headless : false
        })

        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto(Env.testLink) 
        await page.click(Env.javascriptdelayBtn) 
        await page.click(Env.startbtn)

        header=new HeaderPage(page);
        boxpage=new sandBoxPage(page);
        await page.evaluate(() => {
        
            return new Promise((resolve) => setTimeout(resolve, 2000));
          });
    })
    test('javaScript Delay',async()=>{
await header .clicksandboxLink();

    });
    
   
