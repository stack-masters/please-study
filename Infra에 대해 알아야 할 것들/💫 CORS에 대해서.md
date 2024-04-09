# 💫 CORS(Cross-Origin Resource Sharing) 이란?
<br />

![cors](https://github.com/stack-masters/please-study/assets/127307160/48910e34-58d0-4cca-8ab8-b1e441cc044e)

## CORS의 개념

CORS는 다른 도메인으로부터 리소스를 공유할 수 있게 해주는 메커니즘이다. 기본적으로 웹 브라우저는 보안상의 이유로 동일출처정책(Same-Origin Policy)를 따른다. 이 정책에 따르면, 웹페이지는 동일한 출처에서 로드된 리소스만을 요청할 수 있다.

하지만, 이는 웹의 쓸만한 가치를 제한하게 되는데, 예를 들어 API를 사용하는 웹 애플리케이션 같은 경우에는 다른 도메인에서 리소스를 요청해야 하기 때문이다. 이런 문제를 해결하기 위해 CORS가 도입되었다. CORS는 웹페이지가 다른 도메인의 리소스를 안전하게 요청할 수 있도록 해준다.

## CORS 작동방식

CORS는 브라우저와 서버 사이에 이루어진다. 웹페이지가 다른 도메인의 리소스를 요청하면, 브라우저는 먼저 해당 서버에 'preflight request'를 보낸다. 이 요청은 실제 요청을 보내기 전에 서버가 CORS를 허용하는지 확인하는 것이다. 서버는 이 요청에 대해 'Access-Control-Allow-Origin' 같은 CORS 헤더를 포함한 응답을 보낸다. 이 헤더가 허용하는 도메인이 요청한 도메인과 일치하면 브라우저는 실제 요청을 보내고, 그렇지 않으면 에러를 반환 한다.

## **preflight request**

위 작동방식에서 설명한 것 처럼 Preflight request는 웹 브라우저가 실제 요청을 보내기 전에 보내는 요청이며, 이 요청은 실제 요청이 서버에 의해 안전하게 처리될 수 있는지 확인하기 위한 것이다.

이 요청은 HTTP OPTIONS 메서드를 사용하며, 서버에게 다음과 같은 정보를 보낸다.

- **HTTP 메서드**
- **요청의 출처**
- **사용자 지정 헤더**

서버는 이 preflight 요청에 대한 응답으로, 어떤 출처, 메서드, 헤더가 허용되는지를 나타내는 'Access-Control-Allow-Origin', 'Access-Control-Allow-Methods', 'Access-Control-Allow-Headers' 등의 CORS 관련 헤더를 보낸다. 브라우저는 이 응답을 받아, 실제 요청이 서버의 CORS 정책을 충족하는지 확인하며, 충족한다면 실제 요청을 보내고, 그렇지 않다면 에러를 발생시킨다.

## **Express CORS 예제 코드**

```js
const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', (req, res) => {
  res.send('CORS 설정 완료!');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
```

[CORS(Cross-Origin Resource Sharing)이란?](https://blog.naver.com/jinseung0327/223368424688)
