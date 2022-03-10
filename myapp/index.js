/* 변수 초기값 undefined */
console.log(score);

score = 80;
var score;

console.log(score);

/* 스코프 체인에 의한 함수 검색 */
console.log("\n[13.3.2 스코프 체인에 의한 함수 검색 예제]")

function foo() { console.log(' global function foo'); }

function bar() {
    // 중첩 함수
    function foo() {
        console.log('local function foo');
    }
    foo(); // 참조하는 코드의 스코프에서 상위 스코프방향으로 이동하며 선언된 함수를 검색한다.
}
bar();

/* constructor 와 non-constructor의 구분 */

//일반 함수 정의: 함수 선언문, 함수 표현식
function foo() {}
const bar = function () {};

//프로퍼티 x의 값으로 할당된 것은 일반 함수로 정의된 함수다. 이는 메서드로 인정하지 않는다.
const baz = {
    x: function (){}
};

// 일반 함수로 정의된 함수만이 constructor이다.
new foo(); // foo{}
new bar(); // bar{}
new baz.x(); // x{}

//화살표 함수 정의
const arrow = () => {};

new arrow(); // TypeError

//메서드 정의: ES6의 메서드 축약 표현만 메서드로 인정한다.
const obj = {
    x() {}
};

new obj.x(); // TypeError

/* new 연산자*/

//생성자 함수
function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function() {
        return 2 * this.radius;
    };
}

//new연산자 없이 생성자 함수 호출되면 일반 함수로서 호출된다.
const circle = Circle(5);
console.log(circle); // undefined

//일반 함수 내부의 this는 전역 객체 window를 가리킨다.
console.log(radius); // 5
console.log(getDiameter()); // 10

circle.getDiameter(); // TypeError

