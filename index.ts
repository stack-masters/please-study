let a: number = 1; // typescript는 type을 지정해줘야함
let b: string = "안녕"; //  string, number, boolean, bigint, null, undefined,[], {} 등
let c: boolean = true;
let d: number[] = [1, 2];
let e: { name: string } = { name: "kim" }; //  { ?name: string } 이라면 name이 들어올 수도 있고 안 들어올 수도 있다.

let 이름: string | number = "kim"; // 두가지의 타입을 지정 가능

type 내타입 = string | number;
let 성명: 내타입 = 123; // 이런식으로 활용가능 Union Type이라고 불림

let 변수1: any; // 모든 타입 허용 그러나 오류를 안보여줌
let 변수2: unknown; // any와 다르게 버그를 보여줌 다만 number타입이 아님

function 함수(x: number): number {
  // 함수에 타입지정 가능
  return x * 2; // return에다가 타입을 지정할려면 파라미터 옆에 지정
}

function 함수명(x: number | string) {
  // 타입스크립트는 지금 변수의 타입이 확실하지 않으면 마음대로 연산불가
  if (typeof x === "number") {
    // 항상 타입이 무엇인지 미리 체크하는 narrowing 또는 assertion 문법을 사용해야 허락
    return x * 2;
  }
}

type Member = [number, boolean]; // array에 쓸 수 있는 tuple 타입 무조건 이 타입을 지정해줘야함
let john: Member = [123, true]; // 함수는 return 타입으로 void를 설정가능한데 return이 없는지 체크할 수 있는 타입이다

type member = {
  name: string; // object에 타입지정해야할 속성이 너무 많으면 [key :string] : string
};
let joe: member = { name: "kim" };

class User {
  name: string;
  constructor(name: string) {
    // class에서 type 지정하는 법
    this.name = name;
  }
}

let 학교: {
  score: (number | false)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];

function aass(x: number | string) {
  if (typeof x === "string") {
    // 대표적인 narrowing 방법
    return x + "1";
  } else {
    return x + 1;
  }
}
