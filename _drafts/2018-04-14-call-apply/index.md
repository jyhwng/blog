---
path: "/call-and-apply"
date: "2018-04-14"
title: "Call and apply"
tags: ['javascript']
excerpt: "What are call and apply?"
type: ""
---

## 1. apply

`call`과 `apply`는 기능(함수 호출)은 같고 받는 인자만 다르다. 둘다 `this` 키워드를 특정 객체에 바인딩 하는 메소드이다. 

```javascript
func.apply(thisArg, argsArray)
```

- 첫번째 인자는 `this`를 바인딩할 객체, 두번째 인자는 함수를 호출할 인자들의 배열이다.

```javascript
var Person = function(name, age) {
  this.name = name
  this.age = age
}

var me = {}

Person.apply(me, ["Jane", "15"])
```

- 이렇게 빈 객체를 생성자를 쓰지 않고 Person 객체에 prototype을 연결할 수도 있다. 하지만 `Person.prototype`으로 연결된 것은 아니고 함수를 호출한 것일 뿐이다.

---

## 2. call

apply의 두번째 인자를 배열에 넣지 않고 그대로 넘겨주면 된다.

```javascript
Person.call(me, "Jane", "15")
```

---

## 3. 언제 쓰나?

- NodeList 등과 같은 유사 배열 객체에 배열 메소드를 쓰고 싶을 때 사용한다.

```javscript
Array.prototype.slice.apply(pseudoArray)
```