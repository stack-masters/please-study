## NPE [ NullPointerException ] 이란?

> 개발을 할 때 가장 많이 발생하는 예외 중 하나가 바로 NPE(NullPointerException)이다. NPE를 피하려면 null 여부를 검사해야 하는데, null 검사를 해야하는 변수가 많은 경우 코드가 복잡해지고 번거롭다. 

그래서 null 대신 초기값을 사용하길 권장하기도 한다.
> 

```dart
List<String> names = getNames();
names.sort(); // names가 null이라면 NPE가 발생함

List<String> names = getNames();
// NPE를 방지하기 위해 null 검사를 해야함
if(names != null){
    names.sort();
}
```

## Optional 이란?

> Java8에서는 Optional<T> 클래스를 사용해 NPE를 방지할 수 있도록 도와준다. 

Optional<T>는 null이 올 수 있는 값을 감싸는 Wrapper 클래스로, 참조하더라도 NPE가 발생하지 않도록 도와준다. 

Optional 클래스는 아래와 같은 value에 값을 저장하기 때문에 값이 null이더라도 바로 NPE가 발생하지 않으며, 클래스이기 때문에 각종 메소드를 제공해준다.
> 

```java
public final class Optional<T> {

	// If non-null, the value; if null, indicates no value is present

	private final T value;

	...
}
```

[[Java] Optional이란? Optional 개념 및 사용법 - (1/2)](https://mangkyu.tistory.com/70)

^ 이거 정리해서 적어주셈.
