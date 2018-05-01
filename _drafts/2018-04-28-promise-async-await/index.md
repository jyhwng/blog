---
path: "/closure"
date: "2018-04-28"
title: "What is Promise, async/await?"
tags: ['promise', 'async/await', 'javascript']
excerpt: "클로저란 무엇이고, 언제 사용할까?"
type: "post"
---

## 0. Promise 는 비동기 처리를 하는 객체

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
https://developers.google.com/web/fundamentals/primers/promises?hl=ko#_10

```javascript
var promise = new Promise(function(resolve, reject) {
  function getJSON() { ... }
  var data = getJSON('abc.json')
  if (data) {
    resolve(data)
  } else {
    reject(new Error('Oops!'))
  }
})

promise.then(function(result) {
  console.log(result)
}, function(error) {
  console.log(error)
})
```

```javascript
var promise = new Promise(function(resolve, reject) {
  // 어떤 작업 — 주로 비동기 — 을 수행하고 나서...

  if (/* everything worked out fine */) { // 원하는 결과가 나오면 resolve를 수행하고
    resolve('It worked!')
  } else {
    reject(new Error('It broke!'))    // 그렇지 않으면 reject를 수행한다.
  }
})

promise.then(function(result) {   // resolve 되었을 때 실행할 콜백 — '결과를 출력하라'
  console.log(result)
}, function(error) {         // reject 되었을 때 실행할 콜백 — '에러 메시지를 출력하라'
  console.log(error)
})
```

- 출처: https://developers.google.com/web/fundamentals/primers/promises?hl=ko#_10

---

## 1. Promise

비동기 작업을 큐에 저장

---

## 2. async/await

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/async_function
https://medium.com/@bluepnume/learn-about-promises-before-you-start-using-async-await-eb148164a9c8

https://developers.google.com/web/fundamentals/primers/async-functions?hl=ko

```javascript
async doSomething() {
  try {
    await getData() {
      // get data...
    }
  } catch (error) {
    // probably log errors...
  }
}
```

- api 에서 데이터를 받아오는 예시

```javascript
function fetchData() {
	return fetch('https://api.icndb.com/jokes/random')  // fetch로 데이터 받아온다.
  .then((response) =>  response.json())   // .json() 도 promise를 리턴하기 때문에 then으로 한번 더 데이터를 받아와야 한다.
  .then((data) => data.value.joke)
}

const sayJoke = async () => {   // async function 을 정의하고
  try {
    let joke = await fetchData()  // await로 fetch 함수를 실행한다.
    console.log(joke)
  } catch(e) {
    console.log(e)
  }
}

sayJoke()
```

- The json() returns a promise that resolves with the result of __parsing the body text as JSON__. https://developer.mozilla.org/en-US/docs/Web/API/Body/json



---

## 3. Async/await 와 ES6 destructuring 함께 사용하기

```javascript
const [user, account] = await Promise.all([
  fetch('/user'),
  fetch('/account')
])
```

- 순서대로 fetch되는 요청을 destructuring으로 깔끔하게 표현할 수 있다.
- 출처: https://hackernoon.com/javascript-hacks-for-es6-hipsters-67d633ce8ace

https://codepen.io/dsheiko/pen/gaeqRO

--- 

## 4. Promise vs Async/await
https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9