---
path: "/graphql"
date: "2018-04-18"
title: "Why GraphQL?"
tags: ['graphql', 'javascript']
excerpt: ""
type: ""
---

## 1. Why GraphQL?

출처 - [GraphQL vs REST comparison](https://www.netguru.co/blog/grapghql-vs-rest)

---

## 2. REST API vs GraphQL

- declarative data fetching 하는 query 언어 "Request data the same way you think about rendering it" 원하는 데이터만 fetch

- 동적인 request
REST는 endpoint가 많다. 정적으로 요청한다. graphql은 동적으로(?) 요청할 수 있다. GraphQL은 request 를 한번만 보내도 된다. 그래서 네트워크가 느린 곳에서도 탁월하며 대량의 request를 처리할 수 있다. 

- API와의 versioning
schema를 업데이트하면 백엔드와 싱크를 맞출 수 있다. 더이상 쓰이지 않는 필드들은 자동으로 여기서 없어진다. 

* [declarative vs imperative](https://codeburst.io/declarative-vs-imperative-programming-a8a7c93d9ad2)
  - declarative programming: 이 코드는 무엇을 해야한다를 먼저 선언하고 논리를 짜는 프로그래밍 패러다임
  - declarative programming: 명령의 연속으로 어떤 행동을 시키는 것

--

## 3. GraphQL 과 Apollo Client로 개발환경 세팅하기