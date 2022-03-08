// 변수 초기값 undefined
console.log(score);

score = 80;
var score;

console.log(score);

// 스코프 체인에 의한 함수 검색
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

