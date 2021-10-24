const CLIENT_KEY = "fm5PiZD634sPqZ2KgM8EDkgH3tkCcD2jDx9QN0N1MFDJXjFJaz"
const CLIENT_SECRET = 'ofCbtitgLZySDCfCtLaiBmNggXSphqKmLa9LMbDNXEPPJvfAEz'
const REQUEST_TOKEN_URL = 'https://www.tumblr.com/oauth/request_TOKEN'
const AUTHORIZATION_BASE_URL = 'https://www.tumblr.com/oauth/authorize'
const ACCESS_TOKEN_URL = 'https://www.tumblr.com/oauth/access_TOKEN'

const oauth = OAuth({
  consumer: {
      key: CLIENT_KEY,
      secret: CLIENT_SECRET,
  },
  signature_method: 'HMAC-SHA1',
  hash_function(base_string, key) {
      return CryptoJS.HmacSHA1(base_string, key).toString(CryptoJS.enc.Base64)
  },
})

const request_data = {
  url: 'https://api.tumblr.com/v2/user/dashboard',
  method: 'get'
}

// Note: The token is optional for some requests
const token = {
  key: 'G0kTxkEX5BY7nVJ7AGt8myQqH2tof0y7vfg1HCwxpQfE2GS0zn',
  secret: '5aBkfEjONhBqJA18S4AWZ7IgmfIHiobyYFcOsG5uKUiKULnnn9',
}

$.ajax({
  url: request_data.url,
  type: request_data.method,
  data: oauth.authorize(request_data, token),
}).done(function(data) {
  console.log(data)
})