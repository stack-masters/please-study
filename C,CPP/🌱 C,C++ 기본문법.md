# C언어 기본 문법을 정리해보자


### 1.변수선언 및 변수에 값 넣어보기 및 변수 출력해보기
```c
#include <stdio.h>

int main() {
    int value = 10; // 'value'라는 변수에 10 이라는 값을 대입
    char name[] = "hello"; // 'name'이라는 변수에 "hello"라는 문자열 값을 대입

    printf("%d, %s\n", value, name); // 값 출력

    return 0;
}
```

### 2. C언어에서의 연산
```c
#include <stdio.h>

int main() {
    // 숫자 연산
    int x = 5;
    int y = 2;

    printf("%d\n", x + y);  // 더하기
    printf("%d\n", x - y);  // 빼기
    printf("%d\n", x * y);  // 곱하기
    printf("%f\n", (float)x / y);  // 나누기
    printf("%d\n", x / y);  // 몫
    printf("%d\n", x % y);  // 나머지
    printf("%d\n", x * x); // 제곱

    // 문자 연산
    char text1[] = "#오늘은";
    char text2[] = "#월요일";
    char text3[] = "#월요병";

    printf("%s\n%s\n%s%s%s\n", text1, text2, text3, text3, text3);

    // 비교 연산 (0 | 1 출력)
    int a = 1;
    int b = 2;
    printf("%d\n", a > b);  // a가 b보다 크다 참 아니라면 거짓
    printf("%d\n", a < b);  // a가 b보다 작다면 참 아니라면 거짓
    printf("%d\n", a >= b);  // a가 b보다 크거나 같다면 참 아니면 거짓
    printf("%d\n", a <= b);  // a가 b보다 작거나 같다면 참 아니면 거짓
    printf("%d\n", a == b);  // a랑 b가 같다면 참 아니면 거짓
    printf("%d\n", a != b);  // a랑 b랑 다르다면 참 아니면 거짓

    // 논리 연산
    int c = 1;
    int d = 0;
    printf("%d\n", c && d);  // and연산자는 둘다 참이어야 참이다 이코드는 1 : 0 이므로 거짓이다
    printf("%d\n", c || d);  // or연산자는 둘 중 어느 하나라도 참이라면 참을 출력한다 / 0 : 0 이라면 거짓을 출력
    printf("%d\n", !c);  // not연산자는 1을 0으로 0을 1으로 반대로 변환해주는 역할을 한다

    return 0;
}
```

### 3. C언어에서의 입력과 출력
```c
#include <stdio.h>

int main() {
    // 첫번째 방법
    int x, y;
    printf("첫번째 숫자를 입력해주세요 >>> ");
    scanf("%d", &x); // scanf(); 입력을 받는 함수
    printf("두번째 숫자를 입력해주세요 >>> ");
    scanf("%d", &y);
    printf("%d\n", x * y);

    // 두번째 방법
    int a, b;
    printf("첫번째 숫자를 입력해주세요 >>> ");
    scanf("%d", &a);
    printf("두번째 숫자를 입력해주세요 >>> ");
    scanf("%d", &b);
    printf("%d\n", a * b);

    // 태어난 연도를 입력받고 나이 계산해서 출력하기
    int year, age;
    printf("태어난 연도를 입력해주세요 >>> ");
    scanf("%d", &year);
    age = 2023 - year + 1;
    printf("%d살 입니다.\n", age);

    return 0;
}
```

### 4. C언어에서의 조건문
```c
#include <stdio.h>

int main() {
    int distance = 250; // 변수선언

    // 조건문 사용
    if (distance >= 200) {  // distance의 값이 200보다 크거나 같다면 실행
        printf("눈 던지기\n"); 
    } else { // 위 if문의 조건이 아니라면 else문 실행
        printf("눈사람 만들기\n");
    }

    // 조건문 응용해서 실습하기
    int money = 2000;
    if (money >= 20000) {
        printf("치킨과 콜라를 먹는다\n");
    } else if (money >= 10000) {
        printf("떡볶이를 먹는다\n");
    } else {
        printf("편의점에 가서 김밥을 먹는다\n");
    }

    return 0;
}
```

### 5. C언어에서의 반복문
```c
#include <stdio.h>
#include <string.h>

int main() {
    char* names[3] = {"티모", "꼬부기", "파이리"}; // 문자열 배열 선언

    // 반복문 사용
    for (int i = 0; i < 3; i++) {  // 배열의 각 요소에 대해 반복
        if (strcmp(names[i], "티모") == 0) {  // 문자열 비교는 strcmp 함수를 사용
            printf("%s는 ^모^ 입니다.\n", names[i]);
        } else if (strcmp(names[i], "꼬부기") == 0) {
            printf("%s은 포켓몬입니다.\n", names[i]);
        } else {
            printf("%s은 포켓몬입니다!!\n", names[i]);
        }
    }

    return 0;
}
```
```c
#include <stdio.h>

int main() {
    // for 반복문 사용
    for (int i = 1; i < 11; i++) {  // 1부터 10까지 반복
        printf("%d번째 페이지 입니다.\n", i);
    }

    // while 반복문 사용
    int count = 0;
    while (count < 5) {  // count가 5보다 작은 동안 반복
        printf("%d번째 반복입니다.\n", count);
        count += 1;  // count 값을 1 증가
    }

    return 0;
}
```
### 6. C언어에서의 배열
```c
#include <stdio.h>

int main() {
    // 정수 배열 생성 및 초기화
    int numbers[5] = {1, 2, 3, 4, 5};

    // 배열의 각 요소 출력
    for (int i = 0; i < 5; i++) {
        printf("%d ", numbers[i]);
    }
    printf("\n");

    // 문자열 배열 생성 및 초기화
    char* fruits[3] = {"apple", "banana", "cherry"};

    // 배열의 각 요소 출력
    for (int i = 0; i < 3; i++) {
        printf("%s ", fruits[i]);
    }
    printf("\n");

    // 배열 요소 변경
    numbers[0] = 10;
    fruits[0] = "grape";

    // 변경된 배열의 각 요소 출력
    for (int i = 0; i < 5; i++) {
        printf("%d ", numbers[i]);
    }
    printf("\n");
    
    for (int i = 0; i < 3; i++) {
        printf("%s ", fruits[i]);
    }
    printf("\n");

    return 0;
}
```

### 7. C언어에서의 포인터
```c
#include <stdio.h>

int main() {
    int num = 10; // 정수 변수 선언 및 초기화
    int *pNum; // 정수형 포인터 변수 선언

    pNum = &num; // num의 주소를 pNum에 저장

    printf("num의 값: %d\n", num);
    printf("num의 주소: %p\n", &num);
    printf("pNum에 저장된 값(=num의 주소): %p\n", pNum);
    printf("pNum이 가리키는 값(=num의 값): %d\n", *pNum);

    *pNum = 20; // pNum이 가리키는 변수 num의 값을 변경

    printf("num의 값: %d\n", num);
    printf("pNum이 가리키는 값(=num의 값): %d\n", *pNum);

    return 0;
}
```

### 8. C언어에서의 함수
```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

// 함수 정의
int sum(int a, int b) { // a, b를 받아 더해서 값을 반환하는 함수
    int result = a + b;
    return result;
}

// 매개변수가 없는 함수
int getRandomNumber() {
    srand(time(NULL)); // 난수 생성을 위한 seed 설정
    int number = rand() % 10 + 1; // 1부터 10까지의 랜덤 숫자 생성
    return number;
}

// 매개변수만 있는 함수
void printName(char* name) {
    printf("%s\n", name);
}

// 매개변수와 리턴값도 없는 함수
void sayHi() {
    printf("안녕하세요\n");
}

int main() {
    int x = sum(2, 3);
    int y = sum(3, 4);

    printf("%d\n", x); // 출력값 : 5
    printf("%d\n", y); // 출력값 : 7

    printf("%d\n", getRandomNumber());

    printName("coding");

    sayHi();

    return 0;
}
```
- C언어에서의 변수 선언, 입출력, 조건문, 반복문, 포인터 등을 정리해봤다
