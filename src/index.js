const {
  BaseKonnector,
  requestFactory,
  signin,
  scrape,
  saveBills,
  log,
  utils
} = require('cozy-konnector-libs')

const request = requestFactory({
  cheerio: true,
//  jar: true,
  debug: true
})


const requestCheerioUserAgent = requestFactory({
  cheerio: true,
//  jar: true,
  headers: {
    'User-Agent': 'TEST U-A'
  }
})

const requestUserAgent = requestFactory({
  cheerio: false,
//  jar: true,
  headers: {
    'User-Agent': 'TEST U-A'
  }
})


module.exports = new BaseKonnector(start)

async function start(fields) {
  await request('https://example.com')
  // Give the default UA

  await requestCheerioUserAgent('https://example.com')
  // Give the default UA
  // AND IT'S A BUG

  await requestUserAgent('https://example.com')
  // Give the test UA
}


// Problem is repeatable with same kind of request instance to saveBills
/*

await saveBills(entries, fields, {
                                  requestInstance: requestCheerioUserAgent
                                 })
  BUG: Do not use the edited user agent
*/
