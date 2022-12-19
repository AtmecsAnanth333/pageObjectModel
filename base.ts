import { test, chromium } from "@playwright/test";
import Env from "../utills/environment";
    test('Open Letcode', async()=>{
        const browser = await chromium.launch({
           headless : false
        })

        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto(Env.testLink);
    })