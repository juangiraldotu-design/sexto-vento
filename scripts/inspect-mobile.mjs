import puppeteer from 'puppeteer-core';
import fs from 'fs';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const artifactDir = '/Users/juansebastiangiraldoturriago/.gemini/antigravity/brain/6461384e-a762-489d-b843-14500ed29209';

async function testViewport(browser, width, height, label) {
  const page = await browser.newPage();
  await page.setViewport({
    width,
    height,
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true
  });

  await page.goto('http://localhost:4321', { waitUntil: 'networkidle0' });

  const info = await page.evaluate(() => {
    const docWidth = document.documentElement.clientWidth;
    const scrollWidth = document.documentElement.scrollWidth;
    const elements = document.querySelectorAll('*');
    const offenders = [];
    for (const el of elements) {
      const rect = el.getBoundingClientRect();
      if (rect.right > docWidth + 0.5 || rect.left < -0.5) {
        // Skip elements inside overflow-hidden or clip containers
        offenders.push({
          tag: el.tagName,
          id: el.id,
          class: el.className ? el.className.toString().slice(0, 80) : '',
          left: Math.round(rect.left),
          right: Math.round(rect.right),
          width: Math.round(rect.width)
        });
      }
    }
    return { docWidth, scrollWidth, offendersCount: offenders.length, offenders: offenders.slice(0, 5) };
  });

  console.log(`\n=== VIEWPORT ${label} (${width}x${height}) ===`);
  console.log(`clientWidth: ${info.docWidth}, scrollWidth: ${info.scrollWidth}`);
  console.log(`Offenders: ${info.offendersCount}`);
  if (info.offenders.length > 0) {
    console.log(JSON.stringify(info.offenders, null, 2));
  }

  // Take full suite of screenshots for 390px
  if (width === 390) {
    await page.screenshot({ path: `${artifactDir}/screen_top.png` });
    await page.evaluate(() => window.scrollTo(0, 750));
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({ path: `${artifactDir}/screen_mid.png` });
    await page.evaluate(() => window.scrollTo(0, 1800));
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({ path: `${artifactDir}/screen_dishes.png` });
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({ path: `${artifactDir}/screen_bottom.png` });
  }

  await page.close();
}

async function run() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--user-data-dir=/tmp/test-chrome-profile']
  });

  await testViewport(browser, 390, 844, 'iPhone 14/15');
  await testViewport(browser, 360, 740, 'Compact Phone (Galaxy S20)');

  await browser.close();
  console.log('\nMulti-viewport testing complete!');
}

run().catch(console.error);
