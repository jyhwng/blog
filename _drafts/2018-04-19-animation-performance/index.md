---
path: "/animation-performance"
date: "2018-04-19"
title: "How to improve animation performance"
tags: ['performance', 'animation']
excerpt: "Understand layer & test with Chrome devtools"
type: ""
---

알맞은 animation은 유저의 인지 부담을 덜어준다. [by Rachel Nabors](https://www.codenewbie.org/podcast/what-and-why-is-web-animation)

---

## 1. 3 stages
1. Scripting
2. Rendering
3. Painting

---

## 2. Painting stage
얕은 단계의 애니메이션이 리소스를 덜 쓰고 속도가 빠르다.
https://medium.com/outsystems-experts/how-to-achieve-60-fps-animations-with-css3-db7b98610108

---

## 3. Test animation performanace
[Analyze Runtime Performance](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference?hl=ko)
Record 버튼을 누르고 screenshot을 남긴다. recording은 짧게 측정하는게 정확하다.
1. Analyze FPS(Frames per second)
- 유저는 60 FPS 정도를 쾌적하다고 느낀다.
- 빨간색 바가 뜨면 프레임률이 현저히 떨어진 것으로 개선이 필요하다.


https://raygun.com/blog/speed-up-your-website/
https://developers.google.com/web/fundamentals/performance/why-performance-matters/#where_to_go_from_here