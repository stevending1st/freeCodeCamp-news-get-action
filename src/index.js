const https = require('https');
const nodeFetch = require('node-fetch');
const fs = require('fs');
const {
  hostURL_EN,
  options
} = require('./toMarkdownConstant.js');
const {
  gatherInputs,
  inputExistCheck,
  getRouteAddr,
  haveRouterAddrmd,
  HTMLtoMarkdown
} = require('./utilities.js');

// cd ./news-translation
// You can run `node script\toMarkdown\index.js URL<String>`(URL is the URL of the article).

(async function toMarkdown() {
  try {
    const input = gatherInputs();

    await inputExistCheck(input);

    const articleChildRouter = await getRouteAddr(input.issuesBody);

    const URL = `${hostURL_EN}/news/${articleChildRouter}/`;
    options.path = `/news/${articleChildRouter}/`;
    options.agent = new https.Agent(options);

    const articleFileName = await haveRouterAddrmd(articleChildRouter);
    const htmlString = await (await nodeFetch(URL, options)).text();
    const articleText = await HTMLtoMarkdown(htmlString);

    await fs.writeFile(
      input.markDownFileURL + articleFileName,
      articleText,
      (err) => {
        if (err) return Promise.reject(err);
      }
    );
  } catch (error) {
    console.log('ERR:', error);
    process.exitCode = 1;
  }
})();
