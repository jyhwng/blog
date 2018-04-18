---
path: "/media-optimization"
date: "2018-04-16"
title: "Optimize image and svg and boost performance"
tags: ['performance', 'optimization']
excerpt: ""
type: ""
---

* 웹페이지 로딩 시간 개선!

## 1. 반응형 이미지 최적화를 위한 `<picture>` 태그
- [출처](https://www.html5rocks.com/ko/tutorials/responsive/picture-element/)
- 뷰포트의 사이즈에 따라 다른 이미지 소스를 넣을 수 있다.

```html

```
:exclamation: IE와 Opera mini에서는 [polyfill](https://github.com/scottjehl/picturefill)을 사용해야 합니다. ([caniuse](https://caniuse.com/#search=picture))
- Imgix

---

## 2. Optimize SVG 
[SVG optimization](https://raygun.com/blog/improve-page-load-speed-svg-optimization/)
- 독립적으로 쓰이는 svg가 아닌 이상, (html문서 내에서 아이콘처럼 쓰이는 svg 등) 아래 요소는 지워도 된다.
  1. `doctype`은 parent html의 것을 상속받는다.
  2. `comments` - AI에서 자동 생성된 정보
  3. `version` - 브라우저 단에서 무시된다
  4. `xmlns:xlink="https://www.w3.org/1999/xlink"` - 안쓰인다면
  5. X,Y attributes
      - These are coordinates for the top left position of the image, safe to remove from an individual SVG.
  6. `style="enable-background”`
  7. `xml:space="preserve”`
      - This controls the handling of white-space characters, can be removed safely.
  8. Width / Height
      - These attributes control the dimensions of the image much the same as how a standard image is scaled in HTML. Dimensional attributes are safe to remove if you’re sizing the image in CSS.

---

3. Test

[Webpage test](http://www.webpagetest.org/)