import puppeteer from 'puppeteer-core';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const artifactDir = '/Users/juansebastiangiraldoturriago/.gemini/antigravity/brain/6461384e-a762-489d-b843-14500ed29209';

async function run() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true
  });

  await page.goto('http://localhost:4321', { waitUntil: 'networkidle0' });

  // Wait for intro curtain to complete and unmount (~3400ms)
  await new Promise(r => setTimeout(r, 3400));

  // Scroll to Video section
  await page.evaluate(() => {
    const videoSec = document.getElementById('video');
    if (videoSec) videoSec.scrollIntoView({ behavior: 'instant' });
  });

  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: `${artifactDir}/video_showcase_mobile.png` });

  // Click on video card to test modal
  await page.click('#video-player-card');
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: `${artifactDir}/video_modal_mobile.png` });

  const info = await page.evaluate(() => {
    return {
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth
    };
  });
  console.log(`Video Showcase verification - clientWidth: ${info.clientWidth}, scrollWidth: ${info.scrollWidth}`);

  await browser.close();
}

run().catch(console.error);
