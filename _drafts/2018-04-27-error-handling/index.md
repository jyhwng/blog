---
path: "/error-handling"
date: "2018-04-27"
title: "Error handling"
tags: ['javascript']
excerpt: "How to better handle errors?"
type: "post"
---

> 개인적인 공부 노트로, 오류가 있을 수 있습니다.

## 1. try/catch

```javascript
try {
  doSomething()
} catch (error) {
  console.log(error.message)
  return false
}
```

-  Error 객체는 message라는 property를 갖고 있다. 커스텀 에러를 생성하더라도 [글로벌 객체 Error](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Error)의 subclass를 만들어 사용하는 것이 좋다. 

`finally` 사용하기

```javascript
// 문자열을 거꾸로 뒤집고 에러가 있을 경우, 원래 문자열을 출력하는 함수
function reverseString(s) {
  let res;
  try {
    res = s.split('').reverse().join('')
  } catch (e) {
    console.log(e.message)
    res = s
  } finally {
    console.log(res)    
  }
}
```

- 문제 출처: https://www.hackerrank.com/challenges/js10-try-catch-and-finally/problem

---

## 2. `throw`

- `throw` 문을 통해 사용자 정의 에러를 던질 수 있다. (`if`와 같은 'statement' 이다.)

```javascript
throw new Error('Oops')
```

- 에러를 발생시키는 로직을 정의하고 throw할 수도 있다.

```javascript
// 숫자 a가 0보다 큰지, 작은지, 0과 같은지 판별하는 함수
function isPositive(a) {
  if (a > 0) {
    return "YES"
  } else if (a === 0) {
    throw new MyError("Zero")
  } else {
    throw new MyError("Negative")
  }
}

class MyError extends Error {
  constructor(message) {
    super()
    this.message = message + " Error"
  }
}
```

- 출처: https://www.hackerrank.com/challenges/js10-throw/problem

---

## 3. `Error`
- `message`와 `name` property를 갖고 있는 객체

```javascript
var error = new Error('Oops!')
console.log(error.message)  // 'Oops!'
console.log(error.name) // Error
```

```javascript
// Creating Custom Error
class MyError extends Error {
  constructor(message) {
    super(message)
    this.name = "MyError"
  }
}
```

---

## 4. Promise

Promise, then, catch 로 error handling 하기

```javascript
var promise = new Promise(function(resolve, reject) {
  // ...
})

promise.then({
  // ...
}).catch({
  // ...
})
```

---

## 5. async/await 로 error handling 하기

```javascript
async function getUserData() {
  try {
    let data = await getData()
    return data
  } catch (e) {
    console.log(e)
    return false
  }
}
```

[source](https://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript)

https://www.sitepoint.com/proper-error-handling-javascript/
https://runnable.com/blog/handling-errors-with-es6
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#Exception_Handling_Statements