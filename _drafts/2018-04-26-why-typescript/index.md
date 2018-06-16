---
path: "/why-typescript"
date: "2018-04-26"
title: "Why Typescript?"
tags: ['typescript']
excerpt: "Why I like coding Typescript"
type: ""
---

## 1. Typescript 란?

"Javascript that scales"

- TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. (공식사이트)
- Typescript is a language for application scale Javascript.(Github)

![typscript-superset](https://qph.fs.quoracdn.net/main-qimg-b4ea5e4175b7ea1105895f131e9614cc.webp)

- 최신 ECMAScript를 타이트하게 반영하는 superset이다. config에서 어떤 버전을 쓸지 지정하면 알맞게 컴파일을 해주기도 한다.

---

강타입의 자바스크립트 - 자바스크립트는 동적 타입 언어(dynamically typed language)이다. 타입스크립트는 정적 타입 자바스크립트(statically typed javascript)이다.

:point_right: [동적 타입, 정적타입이란?](https://medium.com/@gaperton/typescript-static-or-dynamic-64bceb50b93e)
- 동적 타입: 타입이 value(주로 반환되는 값)와 연결되어 있고, 런타임에 체킹된다.
- 정적 타입: 타입이 variable과 연결되어 있고, 컴파일 단계에서 체킹된다.

타입스크립트는 컴파일 단계에서 타입 체킹이 되기도 하지만 IDE에서 코드를 쓸 때부터 체킹이 되기도 한다.
파일 확장자명을 `.ts`(jsx에 대해선 `.tsx`)로 쓴다.

---

## 2. 장점

1. unit test를 할 때, type checking 을 하지 않아도 된다.
2. 코드(특히 interface) 자체가 명세서가 된다. string, number 등의 primitive type는 당연히 체킹되고, method의 작동 방식도 미리 정의해둘 수 있다.
  - required prop과 optional prop도 지정할 수 있다. 
3. Typescript에서 정의해준 빌트인 DOM APIs 에서 import해서 쓰면 너무나 편리!

---

## 3. 리팩토링 :thumbs_up:

더 나은 에러

컴파일 단계에서, 또는 코드를 쓰는 단계에서 
에러도 ...is undefined 보다 도움이 되는 에러 메시지가 나온다.

https://medium.freecodecamp.org/typescript-javascript-with-super-powers-a333b0fcabc9

https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

typescript gives all the benefits of ES6, plus more productivity

---

## 4. Generic이란?

```javascript
function identity(arg: number): number {
    return arg;
}

function identity(arg: any): any {
    return arg;
}
```

이렇게 두개가 있으면 아래처럼 쓸 수 있는걸 generic.

```javascript
function identity<T>(arg: T): T {
    return arg;
}
```
