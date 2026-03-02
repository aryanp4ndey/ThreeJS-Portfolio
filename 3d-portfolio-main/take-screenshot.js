import { chromium } from 'playwright';

(async () => {
    console.log("Launching browser...");
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.setViewportSize({ width: 1920, height: 1080 });
    console.log("Navigating to localhost:5173...");
    await page.goto('http://localhost:5173');
    console.log("Waiting 8 seconds for 3D objects to load...");
    await page.waitForTimeout(8000);
    console.log("Taking screenshot...");
    await page.screenshot({ path: 'public/images/screenshot.png' });
    await browser.close();
    console.log("Done.");
})();
