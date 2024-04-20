var a = 1; // typescript는 type을 지정해줘야함
var b = "안녕"; //  string, number, boolean, bigint, null, undefined,[], {} 등
var c = true;
var d = [1, 2];
var e = { name: "kim" }; //  { ?name: string } 이라면 name이 들어올 수도 있고 안 들어올 수도 있다.
var 이름 = "kim"; // 두가지의 타입을 지정 가능
var 성명 = 123; // 이런식으로 활용가능 Union Type이라고 불림
var 변수1; // 모든 타입 허용 그러나 오류를 안보여줌
var 변수2; // any와 다르게 버그를 보여줌 다만 number타입이 아님
function 함수(x) {
    // 함수에 타입지정 가능
    return x * 2; // return에다가 타입을 지정할려면 파라미터 옆에 지정
}
function 함수명(x) {
    // 타입스크립트는 지금 변수의 타입이 확실하지 않으면 마음대로 연산불가
    if (typeof x === "number") {
        // 항상 타입이 무엇인지 미리 체크하는 narrowing 또는 assertion 문법을 사용해야 허락
        return x * 2;
    }
}
var john = [123, true]; // 함수는 return 타입으로 void를 설정가능한데 return이 없는지 체크할 수 있는 타입이다
var joe = { name: "kim" };
var User = /** @class */ (function () {
    function User(name) {
        // class에서 type 지정하는 법
        this.name = name;
    }
    return User;
}());
var 학교 = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
function aass(x) {
    if (typeof x === "string") {
        // 대표적인 narrowing 방법
        return x + "1";
    }
    else {
        return x + 1;
    }
}
