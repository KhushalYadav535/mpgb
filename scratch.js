const http = require('https');

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        resolve(data);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function run() {
  const html = await fetchPage('https://mpgb.bank.in/mission.php');
  const aboutHtml = await fetchPage('https://mpgb.bank.in/about-us.php');

  // Regex to remove scripts and styles completely
  let cleanHtml = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  cleanHtml = cleanHtml.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
  let text = cleanHtml.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
  
  let cleanAboutHtml = aboutHtml.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  cleanAboutHtml = cleanAboutHtml.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
  let aboutText = cleanAboutHtml.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');

  console.log("=== MISSION TEXT AROUND 'Mission' ===");
  const missionIndex = text.indexOf('Mission');
  if (missionIndex > -1) {
    console.log(text.substring(missionIndex, missionIndex + 800));
  }
  
  console.log("\n=== ABOUT TEXT AROUND 'established' or 'Gramin' ===");
  const aboutIndex = aboutText.indexOf('Madhya Pradesh Gramin Bank (MPGB)');
  if (aboutIndex > -1) {
    console.log(aboutText.substring(aboutIndex, aboutIndex + 800));
  } else {
    const backupIndex = aboutText.indexOf('Gramin Bank');
    if (backupIndex > -1) {
       console.log(aboutText.substring(backupIndex, backupIndex + 800));
    }
  }
}

run();
