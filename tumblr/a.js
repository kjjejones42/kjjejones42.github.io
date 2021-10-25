const REQUEST_TOKEN_URL = 'https://www.tumblr.com/oauth/request_token'
const AUTHORIZATION_BASE_URL = 'https://www.tumblr.com/oauth/authorize'
const ACCESS_TOKEN_URL = 'https://www.tumblr.com/oauth/access_token'

const CONSUMER = {
  key: 'fm5PiZD634sPqZ2KgM8EDkgH3tkCcD2jDx9QN0N1MFDJXjFJaz',
  secret: 'ofCbtitgLZySDCfCtLaiBmNggXSphqKmLa9LMbDNXEPPJvfAEz',
}
const TOKEN = {
  key: 'G0kTxkEX5BY7nVJ7AGt8myQqH2tof0y7vfg1HCwxpQfE2GS0zn',
  secret: '5aBkfEjONhBqJA18S4AWZ7IgmfIHiobyYFcOsG5uKUiKULnnn9',
}

const oauth = OAuth({
  consumer: CONSUMER,
  nonce_length: 6,
  signature_method: 'HMAC-SHA1',
  hash_function: (base, key)  => CryptoJS.HmacSHA1(base, key).toString(CryptoJS.enc.Base64),
})

async function get_dashboard() {
  const request_data = {
    url: 'https://api.tumblr.com/v2/user/dashboard',
    method: 'GET'
  }
  let result = () => new Promise(resolve => {
      headers = oauth.toHeader(oauth.authorize(request_data, TOKEN));
      req = new Request(request_data.url, {method: request_data.method, headers:headers})
      fetch(req).then(x => x.json().then(y => resolve(y)))
    })
  return result()
}

