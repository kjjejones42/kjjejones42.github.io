/*OAuth1 Authorization
The API supports the OAuth 1.0a Protocol, accepting parameters via the Authorization header, with the HMAC-SHA1 signature method only.

 ----- 
Temporary Credentials Endpoint
This route is used to create a temporary oauth1 token to be used for oauth1 authorization. See https://tools.ietf.org/html/rfc5849#section-2.1 for further information.

Method
URI                                         HTTP Method  Authentication
https://www.tumblr.com/oauth/request_token  POST         OAuth (client credentials)

Request Parameters
None.

Response
Returns 200 OK or an error code. The response body parameters are url encoded (Content-Type: application/x-www-form-urlencoded), and the standard response properties are omitted.

Response Field            Type    Description
oauth_token               String  The access token to use during the authorization process
oauth_token_secret        String  The access token secret to use during the authorization process
oauth_callback_confirmed  String  Indicates whether the protocol is OAuth 1.0a

----- 

Resource Owner Authorization Endpoint
After retrieving temporary credentials, redirect the user to this endpoint so they can authorize your app. See https://tools.ietf.org/html/rfc5849#section-2.2 for further information.

Method
URI                                     HTTP Method  Authentication
https://www.tumblr.com/oauth/authorize  GET          None

Request Parameters
Include these parameters in the query string when you redirect the user.

Parameter    Type    Description                                                        Default  Required?
oauth_token  String  The temporary access token from the temporary credentials request  N/A      Yes
source       String  An optional identifier that indicates where the process started    N/A      No

Response
Upon successful authorization, the user is redirected to your callback url with the following parameters in the query string:

oauth_token - The access token retrieved from the temporary credentials request
oauth_verifier - The token required to retrieve an access token
source - The optional identifier that indicates where the process started

----- 

Access Token Endpoint
The endpoint that is used to exchange an oauth_verifier token for an access token and secret for the user. See https://tools.ietf.org/html/rfc5849#section-2.3 for further information.

Method
URI                                        HTTP Method  Authentication
https://www.tumblr.com/oauth/access_token  GET          OAuth (temporary credentials)

Request Parameters
Parameter       Type    Description                                         Default  Required?
oauth_verifier  String  The token from the authorize redirect query string  N/A      Yes

Response
Returns 200 OK or an error code. The response body parameters are url encoded (Content-Type: application/x-www-form-urlencoded), and the standard response properties are omitted.

Response Field      Type    Description
oauth_token         String  The user's access token
oauth_token_secret  String  The user's access token secret 

*/

// (function(){
  const REQUEST_TOKEN_URL = 'https://www.tumblr.com/oauth/request_token'
  const AUTHORIZATION_BASE_URL = 'https://www.tumblr.com/oauth/authorize'
  const ACCESS_TOKEN_URL = 'https://www.tumblr.com/oauth/access_token'

  const CONSUMER = {
    key: 'fm5PiZD634sPqZ2KgM8EDkgH3tkCcD2jDx9QN0N1MFDJXjFJaz',
    secret: 'ofCbtitgLZySDCfCtLaiBmNggXSphqKmLa9LMbDNXEPPJvfAEz'
  }

  const TOKEN = {
    key: '957MpB8WxP6vQzy2b3kYAK48qUVtSdAQxDVHJSEKUMna2BR26n',
    secret: 'e2qp86KjQP7eOXncKtEkcqjDPYLhqi4AnOBn3uUhsQT94HXsmI'
  }

  function get_token() {
    if (document.cookie == '') {
      return null
    }
    const dict = document.cookie.split('; ').map(x => x.split('=')).filter(x => x.length == 2)
      .reduce((x,y) => {x[y[0]] = y[1]; return x}, {})
    let token = {}
    for (let i of ['key', 'secret']) {
      if (dict[i]) { token[i] = dict[i]}
    }
    return token
  }


  const OAUTH = OAuth({
    consumer: CONSUMER,
    signature_method: 'HMAC-SHA1',
    nonce_length:6,
    hash_function: (base, key)  => CryptoJS.HmacSHA1(base, key).toString(CryptoJS.enc.Base64),
  })

  function make_request(request_data) {
    return new Promise((resolve, reject) => {
      headers = OAUTH.toHeader(OAUTH.authorize(request_data, TOKEN));
      req = new Request(request_data.url, {method: request_data.method, headers:headers})
      fetch(req).then(x => x.json().then(y => resolve(y))).catch(y => reject(y))
    })
  }

  function get_dashboard() {
    const request_data = {
      url: 'https://api.tumblr.com/v2/user/dashboard',
      method: 'GET'
    }
    return make_request(request_data)
  }

  function url_params_from_callback() {
    const url_params = new URLSearchParams(window.location.search);
    if (url_params.has('oauth_verifier')) {
      set_cookie('oauth_verifier', url_params.get('oauth_verifier'))
      return true
    }
    return false
  }

  function set_cookie(key, value) {    
    let date = new Date();
    date.setTime(date.getTime() + (10 * 365 * 24 * 60 * 60 * 1000));
    document.cookie = `${key}=${value}; expires=${date.toUTCString()}; path=/`
  }

  function process_token() {

  }

  function get_request_token() {    
    return new Promise((resolve, reject) => {
    const request_data = {
      url: REQUEST_TOKEN_URL, 
      method: 'POST'
    }
    const au = OAUTH.authorize(request_data)
    console.log(au)
    headers = new Headers(OAUTH.toHeader(au));
    fetch(request_data.url, {method: request_data.method, headers:headers, credentials:'omit', referrerPolicy:'no-referrer'})
    .then(x => x.json().then(y => resolve(y))).catch(y => reject())
  })
  }

  function init() {

  }

  if (!TOKEN) {    
    if (!url_params_from_callback()) {
      get_token()
    } else {
      process_token()
    }
  } else {
    init()
  }
  get_dashboard().then(x => console.log(x)).catch(x => console.log(x))
  get_request_token().then(x => console.log(x)).catch(x => console.log(x))
// })()
