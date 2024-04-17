
> HashMap은 배열과 LinkedList의 연결로 이루어져있다.
> Hash Function을 통해 Hash Table에 저장 & 검색하며 동작한다.

<br/>

- **Map** ==> **key값과 value값을 한 쌍으로 관리**하는 객체
- **Key값**: **중복을 허용하지 않고 순서가 없다** (Set의 특징을 갖는다.)
- **Value값**: **중복을 허용**한다.

<br/>
<br/>

## HashMap 선언
```java
import java.util.HashMap;

HashMap<String, String> map = new HashMap<>(); // <Key, Value>
```

<br/>
<br/>

## 추가

```java
map.put("key" "value");
```

<br/>
<br/>

## 수정 (key값을 중복시키면 value값을 덮어씀)

```java
map.put("key", "value");
```

<br/>
<br/>

## 삭제

```java
map.remove("key");
```

<br/>
<br/>

## 읽기

```java
map.get("key");
```
<br/>

값을 가져오는 것이 아닌, 존재 여부만 확인하고 싶다면 `containsKey`를 사용합니다.
값의 존재 여부를 Boolean Type으로 반환합니다.
```java
map.containsKey("key");
```
