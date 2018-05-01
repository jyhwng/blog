---
path: "/html5-input"
date: "2018-04-29"
title: "HTML5 Input types"
tags: []
excerpt: ""
type: "post"
---

## 0. HTML input types

1. `type="button"`: 기본 동작이 없는 버튼
1. `type="checkbox"`: 단일 값을 선택/해제하는 체크박스
1. `type="radio"`: A radio button, allowing a single value to be selected out of multiple choices.
1. `type="email"`: HTML5 A field for editing an e-mail address.
1. `type="number"`: HTML5 A control for entering a number.
1. `type="password"`: A single-line text field whose value is obscured. Use the maxlength and minlength attributes to specify the maximum length of the value that can be entered.
1. `type="range"`: HTML5 A control for entering a number whose exact value is not important.
1. `type="tel"`: 전화번호 input. 모바일에서는 번호 키패드가 표시되며 `number`와 달리 0으로 시작할 수 있다.
1. `type="text"`: A single-line text field. Line-breaks are automatically removed from the input value.

이외에도 `color`, `date`, `datetime-local`, `file`, `hidden`, `image`, `month`, `Note`, `reset`, `search`, `submit`, `time`, `url`, `week` 등 type이 있다.

- 출처: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input

---

## 1. `datalist` 태그

<form>
  <input name="formula" type="text" list="formula">

  <datalist id="formula">
    <option value="sin">
    <option value="cos">
    <option value="tan">
    <option value="cot">
  </datalist>
</form>

```html
<input name="formula" type="text" list="formula">

<datalist id="formula">
  <option value="sin">
  <option value="cos">
  <option value="tan">
  <option value="cot">
</datalist>
```

- list 의 이름과 datalist 의 id가 일치한다.
- option 값의 들이 autocomplete dropdown 으로 제공된다.

---

## 2. min, max, step

<form>
  <input name="precision" type="number" min="0" max="50" step="5" value="50">
</form>

```html
<input name="precision" type="number" min="0" max="50" step="5" value="50">
```

- value로 default 값을 지정할 수 있다.

---

## 3. range

<form>
  <input name="iterations" type="range" min="1" max="10">
</form>

```html
<input name="iterations" type="range" min="1" max="10">
```

---

## 4. Display validity

css 에서 `:invalid`, `:valid` property로 input 값의 유효성을 표시할 수 있다.

```css
input:invalid + span:after {
  content: '✖';
  padding-left: 5px;
}

input:valid + span:after {
  content: '✓';
  padding-left: 5px;
}
```

출처
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number
- https://www.testdome.com/questions/html-css/advanced-form/9699?visibility=1&skillId=3