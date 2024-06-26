> Response란?

서버가 받은 **요청에 대한 답변을 클라이언트에게 다시 보내는 것**을 말합니다. 
Response 과정은 여러 단계로 나누어 진행됩니다.
> 

## 클라이언트에게 Response를 보내는 단계별 과정

### 1. Request의 수신 및 해석

먼저 서버는 클라이언트로부터 Request를 받습니다. 이때 서버는 요청의 유형(GET, POST 등), 경로, 헤더, 본문 등 요청에 포함된 정보를 해석합니다.

### 2. Request 처리

클라이언트로부터 Request를 받고 해석한 후 이에 따른 처리 과정이 시작됩니다. **데이터베이스 조회, 데이터 처리, 로직의 실행 등**을 포함할 수 있으며, 요청의 종류와 특성에 따라 달라집니다.

### 3. Response 생성

이제 클라이언트로 보낼  Response를 생성합니다. Response는 아래와 같은 내용들을 포함합니다.

1. 상태 코드(Status Code): 요청이 성공적으로 처리되었는지, 에러가 발생했는지 등을 나타내는 코드입니다. 대표적으로 200: OK, 404: Not found, 500: Internal Sever Error와 같습니다.
2. 헤더(Headers): 캐싱 정책, 콘텐츠 유형, 쿠키 등과 같은 metadata를 포함합니다.
3. 본문(Body): 실제 응답 데이터가 포함됩니다. 이는 HTML 문서, JSON 데이터, 이미지 등 다양한 형태일 수 있습니다.

### 4. Response 전송

생성된 응답은 **인터넷을 통해 Request를 보낸 클라이언트에게 전송**됩니다. 이 과정은 일반적으로 HTTP, HTTPS 프로토콜을 사용합니다.

### 5. 클라이언트에서의 Response 처리

서버에서 Response가 전송된 후 **클라이언트에서는 이를 수신하고 해석**합니다. 상태 코드를 확인하여 요청의 성공 여부를 판단하고, 응답의 본문을 바탕으로 적절한 처리를 수행합니다. 예를 들어, HTML 문서는 웹 페이지로 렌더링되고, JSON 데이터는 자바스크립트 객체로 변환되어 추가적인 처리가 이루어집니다.
