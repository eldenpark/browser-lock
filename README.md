# Browser Lock (ex. Pattern Lock Extension)
자유롭게 브라우징 하세요. Browser Lock이 당신의 브라우저를 잠궈드립니다.</br>
<i>[웨일 포럼](http://forum.whale.naver.com/) 기능제안 최다 요구</i></br>
For English, you may want to contact enginehenryed@gmail.com

## What Is It All About
Browser Lock은 크롬 기반 브라우저의 Extension (확장 프로그램) 으로써, 브라우저를 <b>잠그는</b> 기능을 하도록 고안되었다.</br>
2017년 상반기, NAVER의 Chrome 기반 Web Browser [Whale](http://whale.naver.com/) 출시에 힘입어, 다양한 이유에 의해 브라우저를 잠그길 원하는 요청들에 대응할 방책을 고심하였다.
브라우저가 아닌 익스텐션의 차원에서 해당 기능 (브라우저 잠금) 을 실현할 수 있는지 검토함으로써 본 프로젝트가 시작되었다.

## Lock
브라우저를 잠금에서 <b>잠금</b>의 의미는 잠금 이전의 시점까지의 브라우징 기록에 대한 접근을 차단하는 것이다. 권한 (이 경우 패스워드 혹은 패턴) 을 획득하였을 때, 다시 이전 브라우징 기록에 접근할 수 있고, 그렇지 않다면 해당 기록은 유실된다.

## Recently Closed Tabs
2017년 3월 현재, Chrome에서 Recently Closed Tabs를 삭제할 수 있는 API를 열어두지 않은 상태이다. 사용자가 GUI로 브라우징 기록 삭제하면 최근에 닫은 탭이 모두 삭제된다. 하지만 [chrome.browsingData API](https://developer.chrome.com/extensions/browsingData) 로는 동일한 동작을 실현할 수 없다. 따라서 브라우저 잠금시 방문기록은 삭제되나, 최근에 닫은 탭이 깨끗이 삭제 되지 않는 현상이 있다. 이에 관하여 Chrome community 에 제안을 예정하고 있다.

## How It Works
Browser Lock은 브라우저를 다음과 같은 방식으로 잠근다.
- 열린 탭 직렬화 저장 및 닫기
- 저장된 쿠키 모두 저장 및 삭제
- 브라우징 히스토리 저장 및 삭제
- 잠금 화면 출력
- ~~~저장된 패스워드 삭제 (현재 재외)~~~

> <b>저장된 패스워드 잠금 기능</b>은 현재 Browser Lock에 포함되어 있지 않다. 다만, 단일개의 마스터키로 다수의 비밀번호를 관리를 돕는 익스텐션 (서비스) 는 이미 시중에 나와있다. Browser Lock은 이러한 제 3자 App들과 함께 사용할 수 있다.

잠금이 작동하면, 사용자의 로그인 상태는 해제되고, 잠금 해제없이 이전의 고유 사용기록에 접근할 수 없는 상태가 된다.</br>
한편, 잠금 화면에서도 사용자 (혹은 손님) 은 자유롭게 브라우저를 사용할 수 있다. </br>
사용자가 잠금화면에서 Master Password입력에 성공하면, 저장해두었던 모두 데이터를 복원하고 잠금 이전의 시점으로 브라우저 (탭 등을)를 세팅한다.

## Build
```javascript
npm install
npm run build
```

## Install
베타버전의 Browser Lock은 현재 공식 Extension Store에 등록되어 있지 않다. 설치를 위해서 Chrome 기반 브라우저의 확장 앱 추가 (Add Extension) 를 해야 한다.</br>
이 때, Build를 통해 생성된 <b>lib</b>폴더를 Add (혹은 Load) 해야 한다.
