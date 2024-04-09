# **SOP(Same-Origin Policy)**

동일 출처 정책(SOP, Same-Origin Policy)은 어떤 Origin에서 가져온 리소스와 상호작용하는 것을 제한하는 보안 방식입니다. 
동일 출처 정책은 잠재적으로 해로울 수 있는 문서를 분리함으로써 공격받을 수 있는 경로를 줄여줍니다.

# **CORS(Cross-Origin Resource Sharing)**

SOP를 우회하기 위한 표준기술입니다. 

SOP와 CORS 모두 웹 브라우저가 지원하는 기술입니다. 
SOP는 같은 Origin에만 요청을 보낼 수 있지만 CORS는 서로 다른 Origin끼리 리소스를 공유할 수 있는 기술입니다. 

그래서 Cross-Origin 요청을 하기 위해서는 서버의 동의가 필요합니다. 
만약 서버가 Cross-Origin 요청을 동의하면 브라우저에서도 요청을 허락하게 되고 서버가 동의하지 않으면 브라우저에서도 거절하게 됩니다.

이와 같이 **클라이언트와 서버간에 Cross-Origin 요청하고 동의 또는 거절하는 메커니즘**을 HTTP-header를 이용해서 가능한데, 이를 CORS(Cross-Origin Resource Sharing)이라고 합니다.

# Origin

Origin이란 URI 스키마(http, https), hostname(localhost, domain), 포트번호(8080, 18080) 이 3가지를 조합한 형태입니다.

예를 들어 "[http://localhost:8080](http://localhost:8080/)"도 하나의 Origin이고 "[http://localhost:18080](http://localhost:18080/)"도 하나의 Origin입니다.

> 예를 들어 REST API를 제공하는 서버가 "[http://localhost:8080](http://localhost:8080/)"에서 제공하고 있고 해당 서버에 "[http://localhost:18080](http://localhost:18080/)"을 사용하는 애플리케이션이 호출한다면 기본적으로 SOP에 의해서 거부될 것입니다. 

이렇게 다른 Origin에서 자원이 있는 Origin에 자원 공유를 요청하게 할 수 있는 기술이 CORS입니다.
> 

# Spring Boot에서의 CORS

아래 의존성이 필요 합니다.

```java
implementation 'org.springframework.boot:spring-boot-starter-web'
```

CORS 기술은 Spring MVC에서 지원하고 SpringBoot에서는 별다른 빈 설정없이 @CrossOrigin 애노테이션을 이용하면 손쉽게 CORS 기술을 사용할 수 있습니다.

CORS 적용 방법 1 : 컨트롤러 내 매핑 메서드에 적용

```java
@CrossOrigin(origins = {"http://localhost:18080"})
@GetMapping("/hello")
public String hello(){
    return "hello";
}
```

CORS 적용 방법 2 : 컨트롤러 내 전체 매핑 메서드에 적용

```java
@RestController
@CrossOrigin(origins = {"http://localhost:18080"})
@RequestMapping("/sample")
public class SampleController {
    @GetMapping("/hello")
    public String hello(){
        return "hello";
    }
}
```

CORS 적용 방법 3 : 웹 설정 클래스 파일을 생성하여 WebMvcConfigurer 인터페이스의 addCorsMappings 메서드를 구현하여 적용

```java
@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/sample/hello")
                .allowedOrigins("http://localhost:18080/");
    }
}
```
