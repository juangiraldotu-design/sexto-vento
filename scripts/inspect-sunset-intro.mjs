import puppeteer from 'puppeteer-core';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const artifactDir = '/Users/juansebastiangiraldoturriago/.gemini/antigravity/brain/6461384e-a762-489d-b843-14500ed29209';

async function run() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--user-data-dir=/tmp/test-chrome-profile-sunset']
  });

  const page = await browser.newPage();
  await page.setViewport({
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true
  });

  // Navigate but don't wait for network idle to catch intro curtain
  const navPromise = page.goto('http://localhost:4321', { waitUntil: 'domcontentloaded' });

  // Frame 1: At 500ms, curtain closed with white logo centered and clearly readable
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: `${artifactDir}/curtain_closed.png` });

  // Frame 2: At ~2000ms (700ms into the 1850ms fluid split), showing two halves sliding apart
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: `${artifactDir}/curtain_splitting.png` });

  // Frame 3: After curtain completes and is removed (~3600ms total)
  await new Promise(r => setTimeout(r, 1600));
  await page.screenshot({ path: `${artifactDir}/sunset_hero_revealed.png` });

  // Test document overflow
  const info = await page.evaluate(() => {
    return {
      docWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
      curtainVisible: !!document.getElementById('intro-curtain')
    };
  });
  console.log(`Document clientWidth: ${info.docWidth}, scrollWidth: ${info.scrollWidth}`);
  console.log(`Curtain still in DOM: ${info.curtainVisible}`);

  // Scroll to dishes to capture new warm palette
  await page.evaluate(() => window.scrollTo(0, 1750));
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: `${artifactDir}/sunset_dishes.png` });

  // Scroll to footer to capture new warm palette
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: `${artifactDir}/sunset_footer.png` });

  await browser.close();
  console.log('Finished capturing sunset theme and intro curtain!');
}

run().catch(console.error);

