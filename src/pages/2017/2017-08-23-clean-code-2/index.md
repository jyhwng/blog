---
path: "/clean-code-2"
date: "2017-08-23"
title: "Clean Code (2)"
tags: []
excerpt: "Understanding 'Clean Code' in a Pythonic way"
type: ""
---

[Clean Code: A Handbook Of Agile Software Craftsmanship (2009)](http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=34083680) 라는 책을 읽고 정리한 글입니다. 책의 예제는 Java 로 쓰여 있어서 Python으로 쓰인 코드도 함께 찾아보았습니다. 이 책은 그 자체가 클린코드입니다. 코드를 작성하는 원칙과 철학에서 실제 코드까지 설명이 명확하고 군더더기가 없습니다. 실제로 읽다가 노트북을 켜고 리팩토링하며 무릎을 탁친 경우가 적지 않았습니다.

:point_right: [Clean Code (1)](/clean-code-1)

---

## 7. 오류 처리

* 깨끗한 코드란? '물 샐 틈없는 오류처리!' - Bjarne Stroustrup(C++ 창시자)

1. 오류코드 대신 예외를 사용하라.

`if () {} else {}` 대신 `try {} catch {}` 를 사용해서 논리 부분과 오류 처리를 분리한다. try-catch-finally 문부터 작성하고 catch 블록의 예외 유형을 점점 좁혀나가며 리팩토링한다. 확인되지 않은 오류도 포함한다. 확인된 예외만을 잡는 것은 OCP 원칙을 위반한다. 만약에 코드를 변경하게 된다면 메서드 선언부를 전부 고쳐야 하기 때문이다. catch 문에서는 log 에 실패한 연산 이름과 실패 유형을 담는다.

* Open Closed Principle - 코드 유지보수 시 확장에 대해서는 열려있고 수정에 대해서는 닫혀있어야 한다는 원칙

---

## 8. 경계 (오픈소스, third party package 사용하기)

1. 외부 라이브러리 깔끔하게 분리하기

외부 라이브러리는 클래스 자체를 사용하지 않고 클래스의 인스턴스를 따로 생성해서 사용한다.

2. 학습 테스트

외부 코드를 익히는 것은 쉽지 않다. 통합하는 것은 더 어렵다. 간단한 테스트 케이스를 작성하고 출력된 오류 메시지에 따라 코드를 고치는 것을 반복하며 코드를 익힌다. 이를 학습 테스트라고 한다.

모르는 코드를 마주할 때도 있다. 앎과 모름의 경계에 있는 코드는 깔끔하게 분리해서 변경할 때 비용을 줄인다. 외부 코드를 완벽히 이해하고 우리쪽 코드를 통합하는 것보다 구현하고자하는 인터페이스를 미리 설계하고 그 패턴에 외부 코드를 적용하는 것이 낫다.

---

## 9. 단위 테스트

컴파일은 실패하지 않으면서 실행은 실패하는 정도의 단위 테스트를 작성한다. 현재 실패하는 테스트를 통과할 정도로만 실제 코드를 작성한다. '테스트 케이스가 없다면 모든 변경이 잠정적인 버그다.' 즉, 코드를 변경해도 테스트를 돌려보면 되니, 버그가 있을지 두려워하지 않아도 된다.

* 깨끗한 테스트 규칙 FIRST
    - Fast : 테스트는 빠르게 자주 돌려야 한다. 테스트가 느리면 자주 돌릴 엄두를 내지 못한다.
    - Independent : 각 테스트는 독립적으로 실행해도 괜찮아야 한다.
    - Repeatable : 어떤 환경에서도 반복해서 돌아야 한다.
    - Self-validating : 테스트 결과는 True/False로 출력한다. 테스트 결과를 읽기 위해 log를 일일이 읽게 만들어서는 안된다.
    - Timely : 테스트 코드는 실제 코드를 구현하기 직전에 구현한다.

책 모임에서는 테스트 주도 개발에 대해서만 따로 책을 읽으라고 권할 정도로 클린코드에 소개된 내용은 일부에 불과하며, 테스트는 매우 중요하다.

---

## 10. 클래스

1. 책임

클래스도 함수처럼 작아야하며, 단일책임원칙을 따른다. 클래스 이름은 클래스의 책임을 기술한다. Processor, Manager 등과 같이 모호한 이름일 경우, 클래스가 맡은 책임이 많을 가능성이 크다.

2. 응집도

클래스에 속한 메서드와 변수가 서로 의존하며 논리적인 단위로 묶여 있는 것. 응집력을 잃었을 때에는 클래스를 쪼개야 한다.

3. 추상 클래스와 테스트

구체적인 실제 코드가 변경될 때 클래스에 영향을 미치지 않도록 추상 클래스를 사용해 격리한다. 이렇게 하면 원래 클래스를 흉내내는 테스트용 클래스도 만들 수 있다. 실시간으로 변하는 데이터를 받아오는 코드의 경우, 테스트용 추상 클래스가 있으면 고정된 값으로도 테스트가 가능하다. 이렇게 하면 클래스 설계 원칙인 DIP([Dependency Inversion Principle](https://en.wikipedia.org/wiki/Dependency_inversion_principle))에도 부합하게 된다.

---

## 12. 창발성

창발성(Emergence)은 개미 한마리는 집을 지을 능력이 없지만 개미 집합은 거대한 집을 지을 수 있는 능력을 발휘하는 자기조직화 능력에서 온 개념이다. 이 책에서는 앞 장의 내용을 요약/정리했다.

1. 모든 테스트를 실행한다.
2. 중복을 없앤다.
3. 의도를 표현한다.
4. 클래스와 메서드 수를 최소로 줄인다.

---

**'Coding is as much an art as it is a science'** <br/>
**- Rebecca Parsons**
