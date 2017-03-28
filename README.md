## Browser Lock (ex. Pattern Lock Extension)
자유롭게 브라우징 하세요. Browser-lock이 당신의 브라우저를 잠궈드립니다. </br>
([웨일 포럼](http://forum.whale.naver.com/) 기능제안 최다 요구)

# What is it all about
크롬 및 웨일 익스텐션
https://github.com/enginehenryed/pattern-lock-extension

# Startup
다양한 이유에 의해 브라우저를 잠그길 원하는 요청들이 있다.</br>
브라우저가 아닌 익스텐션의 차원에서 해당 기능을 구현할 수 있는지 검토함으로써 본 프로젝트가 시작되었다.

# How it works
Browser Lock은 브라우저를 다음과 같은 방식으로 잠근다.
- 열린 탭 직렬화 저장 및 닫기
- 저장된 쿠키 모두 저장 및 삭제
- 브라우징 히스토리 저장 및 삭제
- 잠금 화면 출력
- ~~~저장된 패스워드 삭제 (현재 재외)~~~

이 때, 모든 사용자의 로그인 상태는 해제되고, 잠금 해제없이 이전의 고유 사용기록에 접근할 수 없다. (특히 SNS 사용자들의 요구를 반영하였다.)

한편, 잠금 화면에서도 사용자 (혹은 손님) 은 자유롭게 브라우저를 사용할 수 있다. </br>
사용자가 잠금화면에서 Master Password입력에 성공하면, 저장해두었던 모두 데이터를 복원하고 잠금 이전의 시점으로 브라우저 (탭 등을)를 세팅한다.

Naver Whale 및 Google Chrome에서 모두 작동
