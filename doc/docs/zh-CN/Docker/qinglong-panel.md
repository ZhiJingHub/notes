# 青龙面板

## 安装
```bash
docker run -dit \
  -v $PWD/ql/data:/ql/data \
  -p 5701:5700 \
  -e TZ=Asia/Shanghai \
  --name qinglong \
  --hostname qinglong \
  --restart unless-stopped \
  whyour/qinglong:latest
```

## 依赖

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
ws
ws@7.4.3
ts-md5
jsrsasign
jsencrypt
jieba
form-data
json5
global-agent
png-js
@types/node
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
got
```

### Python3

```bash
requests
PyExecJS
aiohttp
httpx
pycryptodome
rsa
bs4
ping3
jieba
redis
telethon
urllib3
```

### Linux

```bash
--no-cache
build-base
g++
make
cairo-dev
pango-dev
giflib-dev
libffi-dev
openssl-dev
python3-dev
musl-dev
```

## 拉取脚本后缀

```bash
js mjs py pyc sh ts
```