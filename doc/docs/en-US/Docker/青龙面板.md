# Qinglong Panel

## Installation
```bash
docker run -dit \
  -v $PWD/ql/data:/ql/data \
  -p 5701:5700 \
  --name qinglong \
  --hostname qinglong \
  --restart unless-stopped \
  whyour/qinglong:latest
```

## Script File Extensions

```bash
js mjs py pyc sh ts
```

## Dependencies

### NodeJs

```bash
axios
crypto-js
cheerio
prettytable
dotenv
jsdom
date-fns
MD5@1.3.0
md5@2.x
canvas
request
tough-cookie
tslib
ws@7.4.3
ts-md5
jsrsasign
jsencrypt
jieba
fs
form-data
json5
global-agent
png-js
@types/node
require
typescript
js-base64
moment
node-jsencrypt
node-rsa
node-fetch
qs
ds
yml2213-utils
sm-crypto
node-telegram-bot-api
ql
```

### Python3

```bash
bs4
rsa
requests
canvas
ping3
jieba
PyExecJS
aiohttp
redis
pycryptodome
httpx
```

### Linux

```bash
--no-cache
build-base
g++
cairo-dev
pango-dev
giflib-dev
```
