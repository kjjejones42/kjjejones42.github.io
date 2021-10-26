(function(){
  const REQUEST_TOKEN_URL = 'https://www.tumblr.com/oauth/request_token'
  const AUTHORIZATION_BASE_URL = 'https://www.tumblr.com/oauth/authorize'
  const ACCESS_TOKEN_URL = 'https://www.tumblr.com/oauth/access_token'

  const CONSUMER = {
    key: 'fm5PiZD634sPqZ2KgM8EDkgH3tkCcD2jDx9QN0N1MFDJXjFJaz',
    secret: 'ofCbtitgLZySDCfCtLaiBmNggXSphqKmLa9LMbDNXEPPJvfAEz'
  }

  const TOKEN = get_token();

  const oauth = OAuth({
    consumer: CONSUMER,
    signature_method: 'HMAC-SHA1',
    hash_function: (base, key)  => CryptoJS.HmacSHA1(base, key).toString(CryptoJS.enc.Base64),
  })

  function get_dashboard() {
    const request_data = {
      url: 'https://api.tumblr.com/v2/user/dashboard',
      method: 'GET'
    }
    return new Promise((resolve, reject) => {
        headers = oauth.toHeader(oauth.authorize(request_data, TOKEN));
        req = new Request(request_data.url, {method: request_data.method, headers:headers})
        fetch(req).then(x => x.json().then(y => resolve(y))).catch(y => reject(y))
      })
  }

  function url_params_from_callback() {
    const url_params = new URLSearchParams(window.location.search);
    if (url_params.has('oauth_verifier')) {
      set_cookie('oauth_verifier', url_params.get('oauth_verifier'))
      return true
    }
    return false
  }

  function get_token() {
    if (document.cookie == '') {
      return null
    }
    let cookie = document.cookie.split(';').map(x => x.split('=')).filter(x => x.length == 2)
    let dict = {}
    for (let line of cookie) {
      dict[line[0]] = line[1]
    }
    return {
      key: dict['key'],
      secret: dict['secret']
    }
  }

  function set_cookie(key, value) {    
    let date = new Date();
    date.setTime(date.getTime() + (10 * 365 * 24 * 60 * 60 * 1000));
    document.cookie = `${key}=${value}; expires=${date.toUTCString()}; path=/`
  }

  function process_token() {

  }

  function get_token() {

  }

  function init() {

  }

  if (!TOKEN) {    
    if (url_params_from_callback()) {
      process_token()
    } else {
      get_token()
    }
  } else {
    init()
  }

  get_dashboard().then(x => console.log(x))
  set_cookie("key", "abc")
  set_cookie("token", "123")
})()
