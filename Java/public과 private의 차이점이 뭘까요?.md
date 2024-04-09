Java에서는 접근제어자를 사용하여 클래스, 필드, 메서드 등의 접근 권한을 제한할 수 있다. 접근제어자에는 크게 private, protected, public, default(접근 제어자를 생략) 4가지가 있다.

***private*** 제어자는 해당 멤버를 선언한 클래스 내에서만 접근할 수 있도록 제한한다.

따라서 외부 클래스나 인스턴스에서는 접근할 수 없다. 해당 클래스의 내부 구현에만 사용되는 것이 일반적이다.

***public*** 제어자는 해당 멤버를 모든 클래스에서 접근 가능하다. 
따라서 해당 멤버가 외부에서 자주 사용되는 경우나, 외부에 노출되어도 문제가 없을 경우에 사용된다.

예를 들어 다음과 같이 Person 클래스가 있다고 가정해보자.

```java
public class Person {
    private String name;
    private int age;

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAge(int age) {
        this.age = age;
    }
}

```

위 코드를 보면 name과 age 필드에 private 제어자를 사용해서 외부에서 직접 접근할 수 없도록 했다.

그리고 getName, getAge, setName, setAge 메서드에 public 제어자를 사용해서 외부에서 필드값을 읽고 쓸 수 있도록 구현했다. 이는 해당 객체의 name과 age 필드 값의 무결성을 보장하여야 하기 때문이다.

## getter setter를 통해 외부에서 필드 값을 변경하는 건 똑같은거 아닌가요?

외부에서 필드 값을 직접적으로 변경하지 않고 메서드를 통해 간접적으로 값을 변경하는 방식의 차이이다. 
이를 통해 필드 값을 변경할 때 일관성을 유지함으로써 무결성을 보장할 수 있다.

풀어서 이야기하자면 getter와 setter를 사용하면, 필드값을 변경하기 전에 유효성 검사를 수행하거나, 변경 가능한 범위를 제한하는 등의 작업을 수행할 수 있다. 

이를 통해 필드 값의 무결성을 유지하는 것이다.

아까 Person 클래스 예시에서 추가로 발전시켜보았다.

```java
public class Person {
    private String name;
    private int age;

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public void setName(String name) {
        if (name == null || name.isEmpty()) {
            throw new IllegalArgumentException("이름은 필수 입력값입니다.");
        }
        this.name = name;
    }

    public void setAge(int age) {
        if (age < 0 || age > 120) {
            throw new IllegalArgumentException("나이는 0세 이상 120세 이하로 입력해주세요.");
        }
        this.age = age;
    }
}

```

예시 코드를 보면 setName과 setAge 메서드에서 유효성 검사를 수행하고 유효하지 않은 값에 대해서 IllegalArgumentException을 발생시키도록 구현되어있다. 

이를 통해 필드값의 무결성을 보장하는 것이다.
