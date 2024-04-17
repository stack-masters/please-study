
> 클래스는 객체(인스턴스)를 만들기 위한 설계도입니다.


<br/><br/>

<img width="1255" alt="image" src="https://github.com/stack-masters/please-study/assets/51194584/fdf36cfd-530b-47ee-bda8-971d756ed021">

<br/><br/>

## Class?

클래스는 객체를 만들기 위한 Property, Method와 같은 속성들을 가지고 있습니다.
이 속성들을 바탕으로 실제 메모리에 자리잡는 객체를 생성합니다.
Class는 JVM에서 **정적 메모리 영역**에 저장되며 객체가 여러개 생성되어도 **Class는 한 번만 생성**됩니다.


<br/><br/>


#### *Examples*


### Student Class 정의

```java
public class Student {

	// 생성자
    public Student(String name, int age, int grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    
    // 프로퍼티(변수)
    private String name;
    private int age;
    private int grade;

    // 메서드(기능)
    public void study() {
        System.out.println(name + "이(가) 공부중이에요.");
    }

    public void printInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Grade: " + grade);
    }
}
```

<br/>

### Getter, Setter 선언

> Getter, Setter는 메모리 안전성을 위해 private으로 구성된 프로퍼티에 접근할 수 있도록 합니다.


```java
// Getter 메서드
public String getName() { return name; }
public int getAge() { return age; }
public int getGrade() { return grade; }

// Setter 메서드
public void setName(String name) { this.name = name; }
public void setAge(int age) { this.age = age; }
public void setGrade(int grade) { this.grade = grade; }
```
