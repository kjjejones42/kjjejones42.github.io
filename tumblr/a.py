# import requests
# from requests_oauthlib import OAuth1
# from urllib.parse import parse_qs, urlparse, parse_qsl
# import json

# client_key = "fm5PiZD634sPqZ2KgM8EDkgH3tkCcD2jDx9QN0N1MFDJXjFJaz"
# client_secret = 'ofCbtitgLZySDCfCtLaiBmNggXSphqKmLa9LMbDNXEPPJvfAEz'
# request_token_url = 'https://www.tumblr.com/oauth/request_token'
# authorization_base_url = 'https://www.tumblr.com/oauth/authorize'
# access_token_url = 'https://www.tumblr.com/oauth/access_token'


# # # # Fetch a request token
# oauth = OAuth1(client_key, client_secret=client_secret)
# r = requests.post(url=request_token_url, auth=oauth)
# credentials = parse_qs(r.text)
# resource_owner_key = credentials.get('oauth_token')[0]
# resource_owner_secret = credentials.get('oauth_token_secret')[0]

# authorize_url = authorization_base_url + '?oauth_token='
# authorize_url = authorize_url + resource_owner_key
# print('Please go here and authorize,', authorize_url)
# url = input('Please input the entire url: ')
# d = dict(parse_qsl(urlparse(url).query))
# verifier = d['oauth_verifier']

# oauth = OAuth1(client_key,
#                    client_secret=client_secret,
#                    resource_owner_key=resource_owner_key,
#                    resource_owner_secret=resource_owner_secret,
#                    verifier=verifier)
# r = requests.post(url=access_token_url, auth=oauth)
# credentials = parse_qs(r.text)
# resource_owner_key = credentials.get('oauth_token')[0]
# resource_owner_secret = credentials.get('oauth_token_secret')[0]
# print(str(credentials))

# oauth = OAuth1(client_key,
#                    client_secret=client_secret,
#                    resource_owner_key=resource_owner_key,
#                    resource_owner_secret=resource_owner_secret)
# a = requests.get("https://api.tumblr.com/v2/user/dashboard", auth=oauth)
# import pickle
# print(str(a.request.headers))
# b = 1

import requests
a = {"oauth_consumer_key":"fm5PiZD634sPqZ2KgM8EDkgH3tkCcD2jDx9QN0N1MFDJXjFJaz","oauth_nonce":"Cps9HllEs3ewP60mqMuIdNrfjrrckeiv","oauth_signature_method":"HMAC-SHA1","oauth_timestamp":1635105968,"oauth_version":"1.0","oauth_token":"G0kTxkEX5BY7nVJ7AGt8myQqH2tof0y7vfg1HCwxpQfE2GS0zn","oauth_signature":"e4ff4b37341700c50032eec712a6eb78758ed2eb"}
a = requests.get("https://api.tumblr.com/v2/user/dashboard", headers=a)
b = 1

