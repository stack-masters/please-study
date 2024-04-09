# 🐳 도커 파일이란?

Docker 상에서 작동시킬 컨테이너의 구성 정보를 기술한 파일이며,

Docker build 명령을 통해 Docker file 에 기술된 구성 정보를 바탕으로 Docker image를 생성한다.

![dockertime](https://github.com/stack-masters/please-study/assets/127307160/ba498736-c96b-43e8-8605-8873be44457f)

# 🐳 도커 파일의 지시문과 각 지시문의 역할

- FROM

이 지시문은 새로 생성할 이미지의 기반이 될 이미지를 정의 한다. 예를 들어, FROM ubuntu:18.04라는 명령은 Ubuntu 18.04를 기반으로 새 이미지를 만들겠다는 의미이다.

- CMD

이 지시문은 컨테이너가 시작될 때 실행될 명령을 정의 한다. CMD가 여러 번 사용될 경우 마지막 CMD만 적용 된다. 예를 들어, CMD ["echo", "Hello, World!"]는 컨테이너가 시작될 때 "Hello, World!"를 출력 한다.

- RUN

이 지시문은 이미지 빌드 시에 실행될 명령을 정의 한다. RUN은 주로 패키지를 설치하거나, 디렉토리를 만드는 등의 작업에 사용 된다. 예를 들어, RUN apt-get update && apt-get install -y curl은 이미지가 빌드될 때 curl 패키지를 설치 한다.

- ENTRYPOINT

ENTRYPOINT 지시문은 컨테이너가 시작될 때 실행될 명령을 정의 한다. CMD와 비슷해 보이지만 차이점이 있는데, ENTRYPOINT는 컨테이너를 실행할 때 항상 실행되는 반면, CMD는 ENTRYPOINT에 의해 오버라이드될 수 있다. (여기서 오버라이드란? 덮어쓰기이다. 즉 CMD명령어는 덮어 쓰기가 가능하지만 ENTRYPOINT 명령은 컨테이너가 시작될 때 항상 실행 된다.)

- EXPOSE

이 지시문은 컨테이너가 네트워크 포트를 통해 들어오는 연결을 받아들일 수 있도록 한다. 예를 들어 EXPOSE 80은 컨테이너가 80번 포트를 통해 들어오는 연결을 받아들일 수 있음을 나타낸다.

- COPY

이 지시문은 호스트 시스템의 파일 또는 디렉토리를 도커 이미지에 복사 한다. 예를 들어, COPY . /app는 현재 디렉토리의 모든 파일을 이미지의 /app 디렉토리에 복사 한다.

- ADD

ADD 지시문은 COPY와 비슷하지만 추가적인 기능을 가지고 있다. URL을 지정하면 원격 파일을 다운로드하고, 압축 파일을 지정하면 자동으로 압축 해제합니다.

- WORKDIR

이 지시문은 RUN, CMD, ENTRYPOINT, COPY, ADD 명령어들이 실행되는 작업 디렉토리를 설정 한다. 예를 들어, WORKDIR /app는 이후의 명령들이 /app 디렉토리에서 실행되도록 합니다. (cd 명령어와 같은 기능)

- ENV

도커 이미지는 빌드할때 사용하는 도커파일에 초기 환경변수를 설정할 수 있다. 이때 지정한 환경변수는 RUN, CMD 지시문 등의 적용이 된다.

# ✨ NodeJS를 사용한 도커 파일 예제

```docker
# Node.js v18를 기반 이미지로 설정
FROM node:18

# 작업 디렉토리를 /app으로 설정
WORKDIR /app

# package.json 파일을 컨테이너에 복사
COPY package*.json ./

# 의존성 패키지들을 설치합니다.
RUN npm install

# 애플리케이션의 소스 코드를 컨테이너에 복사
COPY . .

# 애플리케이션이 3000번 포트에서 동작한다고 선언
EXPOSE 3000

# 애플리케이션을 실행하는 CMD를 정의
CMD [ "npm", "run", "start" ]

```

출처 : 제 블로그..

[도커파일(Dockerfile) 파해쳐보기](https://blog.naver.com/jinseung0327/223368259023)
