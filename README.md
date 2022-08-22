# JS-Chrome-App
JS Practice!

## 요점 (2022/08/20)
1. HTML 문서 document 객체에서 최종 부모 element를 가져올 수 있다.
2. 그 부모 element의 자식은 가져온 element 객체로부터 또 가져올 수 있다.
3. input에 입력된 값은 value 프로퍼티로부터 얻을 수 있다.
4. localstorage를 통해 브라우저에게 어떠한 값을 기억하게 할 수 있다. 메서드는 getItem, setItem, removeItem 등이 있다.

## 요점 (2022/08/21)
1. padStart는 String의 메서드로 문자열이 일정 길이가 되지 않으면 일정 길이가 되도록 특정 문자를 추가하는 함수.
2. JS내에서 HTML element를 생성하는 함수는 createElement함수. 인수로 HTML 태그 이름을 넣으면 된다.
3. JS내에서 HTML 문서 끝 부분에 요소를 추가하는 함수는 appendChild 함수.

## 요점 (2022/08/23)
1. `JSON.stringify` 메서드는 JS Object를  string으로 변환하는 메서드.
2. `JSON.parse` 메서드는 string을 JS Object로 변환하는 메서드. string이 배열 형태로 저장되어 있다면 배열로 변환해준다.
3. `filter` 메서드는 인수로 전달한 함수가 true를 반환한 요소만 남기고 새로운 배열을 반환하는 메서드.
4. 어떤 수를 비교할 때는 항상 type을 고려해야함. 특히 HTML 요소를 다룰때.