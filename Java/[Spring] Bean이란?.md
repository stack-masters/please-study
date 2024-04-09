![image](https://github.com/stack-masters/please-study/assets/84012697/82abb196-12e8-42c7-81b3-6b5e48ee8fbb)***"스프링 컨테이너가 생성해준 자바 객체 "***

스프링 빈은 쉽게 말해 스프링 컨테이너가 생성해준 자바 객체를 의미한다.

우리가 흔히 스프링 부트에서는 `@Component` , `@Controller` , `@Service` 등의 어노테이션을 통해 특정 객체를 빈으로 등록해 사용한다.

이는 내부적으로, **`@Component`**라는 어노테이션이 붙은 클래스들에 대해 (@Controller 와 @Service 도 실제로는 @Component 어노테이션을 가진다) 스프링 컨테이너가 이들을 빈으로 등록해주는 것이다.

## 스프링 컨테이너

**컨테이너**는 객체의 생성 및 관리를 담당하며 이외의 여러 다양한 기능을 제공한다.

스프링 또한 객체를 생성하고 객체간 의존관계를 관리하므로 컨테이너라고 말할 수 있으며, 이를 **스프링 컨테이너**라고 부른다.

> 스프링에서는 크게 **`BeanFactory`** 라는 bean 객체를 관리하는 컨테이너와, 이를 상속한 **`ApplicationContext`** 라는 컨테이너를 제공한다.

**`ApplicationContext`** 는 bean 객체를 관리하는 기능 이외에도 다양한 기능을 지원한다. 따라서 대부분의 스프링 프로젝트는 이 유형의 컨테이너를 이용한다.
> 

스프링에서 객체를 bean으로 등록, 사용하는 과정은 아래와 같다.

**1) 스프링 컨테이너가 구동되면,**

**2) 컨테이너는 스프링 설정 파일을 확인, <bean> 이라는 엘리먼트들에 대해 객체를 생성한다.**

**3) 유저 클래스에서 해당 객체를 사용할 때에는 getBean() 메소드를 호출한다.**

**4) 컨테이너는 bean으로 등록한 객체를 반환한다.**

실제 코드로 확인해보자.

## 빈 등록과 요청

- Bean.java

Bean이라는 클래스를 생성하고, "Bean 객체 생성" 을 출력하는 기본 생성자와 sayHello라는 메서드를 작성해주었다.

![image](https://github.com/stack-masters/please-study/assets/84012697/7cb9c9fd-0670-4467-ab29-3803804ab67f)

- Beans.xml

**`<bean>`**엘리먼트를 통해 Bean 클래스를 **bean으로 등록**한다. `id` 속성은 bean 객체를 컨테이너에 요청할 때 사용할 값으로, bean 내에서 유일하기만 하면 우리가 임의로 등록할 수 있으며, `class` 속성은 해당 클래스가 위치한 패키지 -> 클래스 경로를 정확히 입력해주어야 한다.

![image](https://github.com/stack-masters/please-study/assets/84012697/492f709f-fda5-4ab6-b2f0-0b8ff6ebfe98)

- BeanTest.java

bean 생성을 테스트 할 BeanTest 라는 클래스를 생성하고, 컨테이너를 가동시킨 후 빈을 가져와보자.

![image](https://github.com/stack-masters/please-study/assets/84012697/8dc3a50a-ccce-43e3-9a28-715e7c80a5ae)

**`AbstractApplicationContext context=new GenericXmlApplicationContext("beans.xml");`**

: 인자로 받은 "beans.xml" 파일을 로딩해 컨테이너를 구동시킨다.

**`Bean bean1 = (Bean) context.getBean("myBean");`**

: 컨테이너 context로부터 "myBean" 이라는 id를 가진 빈을 받아온다.

이 때, **컨테이너는 Object 클래스를 반환하므로, 이를 Bean 클래스로 다운캐스팅**한다.

BeanTest 클래스를 실행시키고, 그 결과를 확인해보자.

![image](https://github.com/stack-masters/please-study/assets/84012697/560f9c1f-93fc-4d84-93f3-13b41caaa483)

다음과 같이, Bean 객체의 생성과, 두개의 Bean 에 대해 sayHello 메서드가 정상적으로 호출되었음을 확인할 수 있다.

이 때, **Bean 객체의 생성은 1번**만 이루어진 것에 주목해야 하는데, 이는 컨테이너가 객체를 **싱글톤 객체**로 생성해주었음을 의미한다.

이는 객체를 생성할 때, scope의 기본 값이 singleton이기 때문이며 원한다면 변경도 가능하다. 다만, 같은 기능을 하는 객체를 여러개 생성할 필요는 굳이 없으니, 하나를 생성해 공유하는 것이 일반적이다.

## **<bean> 엘리먼트 속성값**

앞선 예제에서 우리는 <bean> 엘리먼트 내에 id와 class를 지정해주었다. 이외에도 우리가 추가로 지정할 수 있는 속성들에 대해 알아보자.

### 1) **init-method / destroy-method**

> 스프링 컨테이너가 객체를 생성해 bean으로 등록할 때는, 앞서 살펴보았듯이 기본 생성자를 호출한다.
따라서 객체 생성 이후 초기화 작업이 필요한 부분들은 따로 메서드 내에서 처리해주어야하며,

이를 **`init-method`** 로 지정하면 컨테이너는 객체의 생성 이후 해당 메서드를 호출한다.
반대로, **`destroy-method`** 속성은 스프링 컨테이너가 객체를 삭제하기 이전에 호출하는 메서드이다.
> 

![image](https://github.com/stack-masters/please-study/assets/84012697/97b33352-9a16-4d7b-aca1-d1e545485c27)

다음과 같이 Bean 클래스에 initMethod() 와 destroyMethod()를 추가한다.

![image](https://github.com/stack-masters/please-study/assets/84012697/15bc92ac-f539-4dbf-aa3d-259a7dfaa785)

이후, <bean>의 속성값인 init-method 와 destroy-method 에 각 메서드를 지정해준다.

![image](https://github.com/stack-masters/please-study/assets/84012697/7bf690ff-3966-49c0-bbd7-cb6543e58189)

두 bean에 대해 sayHello 메서드를 호출 한 후, context.close()를 통해 컨테이너를 종료하도록 변경해준다.

다시 한 번 BeanTest를 실행해보자.

![image](https://github.com/stack-masters/please-study/assets/84012697/6949f7bf-e199-46cc-ad4d-9645b8b5ed8b)

위와 같이 객체의 생성 이후, init() 함수가, 객체의 삭제 이전 destroy() 함수가 정상적으로 호출되었다.

**2) lazy-init**

**`lazy-init`**은 객체가 사용되는 시점에 생성이 되도록 할 수 있는 속성이다.

이 속성의 기본값은 fault로, 객체는 컨테이너가 구동되는 시점에 생성, 빈으로 등록된다.

이를 true로 설정하게 되면, 컨테이너 시작 시점이 아니라, 객체를 getBean() 하는 시점에 객체를 생성한다.

즉, 자주 사용되지 않으면서 메모리를 많이 차지하는 빈의 경우 `lazy-init="true"` 속성을 <bean> 엘리먼트에 추가해줄 수 있다.

**3) scope**

앞서, 두개의 Bean 객체에 대해 생성자 호출은 한 번만 이루어진 것을 확인했는데, 이는 **`scope`** 속성의 기본값이 singleton 이기 때문이다.

이를 prototype으로 바꾸어 설정할 경우, 컨테이너는 해당 빈을 요청받을 때마다 새로운 객체를 생성해준다.

실제 변경된 동작을 확인해보자. 기존의 코드에 `scope="prototype"` 속성을 추가했다.

![image](https://github.com/stack-masters/please-study/assets/84012697/8e077bd6-cd63-4545-b3a3-0fb337916393)

![image](https://github.com/stack-masters/please-study/assets/84012697/1da75f27-19db-4258-9dfc-b46b4601d0af)

다음과 같이 Bean 객체가 2번 생성, 즉 생성자가 2번 호출된 것을 확인할 수 있다.

마지막으로, 스프링부트에서는 이러한 기능들을 어떠한 어노테이션을 통해 제공하는지 간단히 알아보자면,

**`빈의 등록`** 에는 **`@Component`** 를,

**`init-method`** 에는 **`@PostConstruct`** 를,

**`destroy-method`** 에는 **`@PreDestroy`** 를,

**`lazy-init=true`** 설정에는 **`@Lazy`** 를,

**`scope`** 설정에는 **`@Scope`** 를

각각 적용해 사용할 수 있다.

이렇게, 실제로 스프링 빈이 어떤식으로 등록되고 반환되는지 기본 원리를 이해했으니 스프링 부트가 스프링을 손쉽게 이용하는데에 얼마나 많은 기능을, 그것도 하나의 어노테이션만으로 제공하는지 알 수 있을 것이다.

기본을 알아야 응용을 할 수 있으니, 부트의 기능 뿐 아니라 스프링의 기본 원리들을 이해하는것이 상당히 중요하다고 생각한다.
